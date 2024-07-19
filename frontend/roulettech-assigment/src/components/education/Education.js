import classes from "./Education.module.css";

export default function Education(props) {
  return (
    <div className={classes.education}>
      <div className={classes.content}>
        <div className={classes.text}>
          <h1>Education</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
