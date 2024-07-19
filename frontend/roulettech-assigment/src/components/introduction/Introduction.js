import classes from "./Introduction.module.css";
import profilePicture from "../../pictures/ProfilePicture.jpeg";

export default function Introduction(props) {
  return (
    <div className={classes.introduction}>
      <div className={classes.content}>
        <div className={classes.text}>
          <h1>Aditya Gupta</h1>
          <h2>AWS Certified Full Stack Developer</h2>
          <p>{props.text}</p>
        </div>
        <img src={profilePicture} alt="profile" />
      </div>
    </div>
  );
}
