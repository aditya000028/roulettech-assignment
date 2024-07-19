import classes from "./About-Me.module.css";

export default function AboutMe(props) {
  return (
    <div className={classes.aboutMe}>
      <div className={classes.content}>
        <div className={classes.text}>
          <h1>About Me</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
