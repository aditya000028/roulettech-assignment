import { useState, useRef, Fragment } from "react";
import classes from "./Comments.module.css";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Button
} from "@mui/material";

export default function Comments() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const refAndErrorFunc = [
    [firstNameRef, setFirstNameError],
    [lastNameRef, setLastNameError],
    [subjectRef, setSubjectError],
    [messageRef, setMessageError],
  ];

  const userComments = [];

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const [ref, setError] of refAndErrorFunc) {
      setError("");
      const value = ref.current.value.trim();
      if (value.length === 0) setError("Field cannot be empty.");

      if (ref !== messageRef && value.length > 128)
        setError("Field cannot be more than 128 characters");
      else if (ref === messageRef && value.length > 256)
        setError("Field cannot be more than 256 characters");
    }
  };

  return (
    <div className={classes.comments}>
      <div className={classes.content}>
        <div className={classes.introText}>
          <h1>Comments?</h1>
          <p>
            Something needs improvement? Anything missing? Please feel free to
            write any comments, suggestions, questions, or anything else!
          </p>
        </div>
        {userComments.length === 0 ? (
          <p className={classes.noComments}>
            No comments yet - be the first to add a comment.
          </p>
        ) : (
          <div className={classes.allComments}>
            <List>
              {userComments.map((comment) => {
                return (
                  <div className={classes.comment}>
                    <ListItem key={comment.id} alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="pic">{comment.firstName.charAt(0) + comment.lastName.charAt(0)}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={comment.subject}
                        secondary={
                          <Fragment>
                            <span className={classes.timestamp}>{comment.timestamp}</span>
                            <p className={classes.commentText}>{comment.text}</p>
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
                  inputRef={messageRef}
                  {...(messageError.length !== 0 ? { error: true } : {})}
                  helperText={messageError.length === 0 ? "" : messageError}
                  onChange={() => setMessageError("")}
                  fullWidth
                  multiline
                  id="outlined-required"
                  label="Message"
                />
              </div>
            </div>
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
