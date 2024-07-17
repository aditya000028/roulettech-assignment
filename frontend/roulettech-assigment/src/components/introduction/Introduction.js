import classes from "./Introduction.module.css";
import profilePicture from "../../ProfilePicture.jpeg";

export default function Introduction() {
  return (
    <div className={classes.introduction}>
      <div className={classes.text}>
        <h1>Aditya Gupta</h1>
        <h2>Software Engineer</h2>
        <p>
          jh bwkuhbewbwe fukwegi fweugyf uyeg fyuwegf uweg fuygew fuygwe fuweg
          fwgyef owgef kuagek ufgakf gwaeiuf iwe fkagdsfkuywge fiuwEKUYFG wkeug
          fkuwg fkugeywf kuywegf kuweg fkugy
        </p>
      </div>
      <img src={profilePicture} alt="profile" />
    </div>
  );
}
