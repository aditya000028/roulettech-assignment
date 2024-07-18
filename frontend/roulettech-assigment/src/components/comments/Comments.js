import classes from "./Comments.module.css";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

export default function Comments() {
  const userComments = [];

  return (
    <div className={classes.comments}>
      <div className={classes.content}>
        <div className={classes.introText}>
          <h1>Comments?</h1>
          <p>I would love your comments. Please provide feedback.</p>
        </div>
        <div className={classes.allComments}>
          <List>
            {userComments.map((comment) => {
              return (
                <ListItem key={comment.id} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="pic">{comment.name}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={comment.subject}
                    secondary={comment.timestamp}
                  >
                    {comment.text}
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </div>
        <div className={classes.newComment}></div>
      </div>
    </div>
  );
}
