import AboutMe from "../../components/about-me/About-Me";
import Comments from "../../components/comments/Comments";
import Education from "../../components/education/Education";
import Introduction from "../../components/introduction/Introduction";
import classes from "./Profile.module.css";

export default function ProfilePage() {
  return (
    <div className={classes.profilePage}>
      <Introduction />
      <AboutMe />
      <Education />
      <Comments />
    </div>
  );
}
