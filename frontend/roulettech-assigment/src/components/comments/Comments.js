import { useState, useRef, Fragment, useEffect } from "react";
import classes from "./Comments.module.css";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Button,
} from "@mui/material";
import API from "../../api/api";

export default function Comments() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const subjectRef = useRef();
  const commentRef = useRef();
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [commentError, setCommentError] = useState("");
  const [newCommentError, setNewCommentError] = useState(false);
  const [userComments, setUserComments] = useState([]);
  const [userCommentsError, setUserCommentsError] = useState(false);

  const refAndErrorSetters = [
    [firstNameRef, setFirstNameError],
    [lastNameRef, setLastNameError],
    [subjectRef, setSubjectError],
    [commentRef, setCommentError],
  ];

  useEffect(() => {
    API.get("comments/")
      .then((response) => setUserComments(response.data))
      .catch((err) => {
        console.error(err);
        setUserCommentsError(true);
      });
  }, []);

  function validateForm() {
    let formContainsError = false;

    for (const [ref, setError] of refAndErrorSetters) {
      setError("");
      const value = ref.current.value.trim();
      if (value.length === 0) {
        setError("Field cannot be empty.");
        formContainsError = true;
      }

      if (ref !== commentRef && value.length > 128) {
        setError("Field cannot be more than 128 characters");
        formContainsError = true;
      } else if (ref === commentRef && value.length > 256) {
        setError("Field cannot be more than 256 characters");
        formContainsError = true;
      }
    }

    return formContainsError;
  }

  function clearForm() {
    for (const [ref] of refAndErrorSetters) ref.current.value = "";
  }

  function submitForm() {
    const newComment = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      timestamp: new Date().toISOString(),
      subject: subjectRef.current.value,
      comment: commentRef.current.value,
    };
    API.post("comments/", newComment)
      .then((response) => {
        setUserComments((prevUserComments) =>
          prevUserComments.concat(response.data)
        );
        clearForm();
      })
      .catch((err) => {
        console.error(err);
        setNewCommentError(true);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewCommentError(false);
    if (!validateForm()) {
      submitForm();
    }
  };

  return (
    <div className={classes.comments}>
      <div className={classes.content}>
        <div className={classes.introText}>
          <h1>Comments</h1>
          <p>
            Something needs improvement? Anything missing? Please feel free to
            write any comments, suggestions, questions, or anything else!
          </p>
        </div>
        {userCommentsError ? (
          <p>Unable to get user comments. Please try again later.</p>
        ) : userComments.length === 0 ? (
          <p className={classes.noComments}>
            No comments yet - be the first to add a comment.
          </p>
        ) : (
          <div className={classes.allComments}>
            <List>
              {userComments.map((comment) => {
                return (
                  <div key={comment.id} className={classes.comment}>
                    <ListItem key={comment.id} alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="pic">
                          {comment.firstName.charAt(0) +
                            comment.lastName.charAt(0)}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={comment.subject}
                        secondary={
                          <Fragment>
                            <div className={classes.extraInfo}>
                              <span className={classes.commentText}>
                                {comment.firstName + " " + comment.lastName}
                              </span>
                              <span className={classes.timestamp}>
                                {comment.timestamp}
                              </span>
                            </div>
                            <p className={classes.commentText}>
                              {comment.comment}
                            </p>
                          </Fragment>
                        }
                      >
                        {comment.text}
                      </ListItemText>
                    </ListItem>
                    <hr className={classes.divider} />
                  </div>
                );
              })}
            </List>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className={classes.formContent}>
            <h3>New Comment</h3>
            <div className={classes.formInput}>
              <div className={classes.name}>
                <div className={classes.firstName}>
                  <TextField
                    inputProps={{ style: { color: "beige" } }}
                    required
                    focused
                    fullWidth
                    inputRef={firstNameRef}
                    {...(firstNameError.length !== 0 ? { error: true } : {})}
                    helperText={
                      firstNameError.length === 0 ? "" : firstNameError
                    }
                    onChange={() => setFirstNameError("")}
                    id="outlined-required"
                    label="First Name"
                    className={classes.muiInput}
                  />
                </div>
                <div className={classes.lastName}>
                  <TextField
                    inputProps={{ style: { color: "beige" } }}
                    required
                    focused
                    inputRef={lastNameRef}
                    {...(lastNameError.length !== 0 ? { error: true } : {})}
                    helperText={lastNameError.length === 0 ? "" : lastNameError}
                    onChange={() => setLastNameError("")}
                    fullWidth
                    id="outlined-required"
                    label="Last Name"
                  />
                </div>
              </div>
              <div className={classes.subject}>
                <TextField
                  inputProps={{ style: { color: "beige" } }}
                  required
                  focused
                  fullWidth
                  inputRef={subjectRef}
                  {...(subjectError.length !== 0 ? { error: true } : {})}
                  helperText={subjectError.length === 0 ? "" : subjectError}
                  onChange={() => setSubjectError("")}
                  id="outlined-required"
                  label="Subject"
                />
              </div>
              <div className={classes.message}>
                <TextField
                  inputProps={{ style: { color: "beige" } }}
                  required
                  focused
                  inputRef={commentRef}
                  {...(commentError.length !== 0 ? { error: true } : {})}
                  helperText={commentError.length === 0 ? "" : commentError}
                  onChange={() => setCommentError("")}
                  fullWidth
                  multiline
                  id="outlined-required"
                  label="Comment"
                />
              </div>
            </div>
            {newCommentError ? (
              <p className={classes.newCommentErrorMessage}>
                Oops! Something went wrong, please try again later.
              </p>
            ) : (
              ""
            )}
            <div className={classes.submit}>
              <Button
                style={{ backgroundColor: "beige", color: "black" }}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
