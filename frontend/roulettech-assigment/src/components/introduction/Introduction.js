import classes from "./Introduction.module.css";
import profilePicture from '../../ProfilePicture.jpeg';

export default function Introduction() {
  return (
    <div className={classes.introduction}>
      <img src={profilePicture} alt="profile" />
      <div className={classes.text}>
        <h1>Aditya Gupta</h1>
        <h2>Software Engineer</h2>
      </div>
    </div>
  );
}
