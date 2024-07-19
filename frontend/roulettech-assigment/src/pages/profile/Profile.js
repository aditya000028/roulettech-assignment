import { useEffect, useState } from "react";
import AboutMe from "../../components/about-me/About-Me";
import Comments from "../../components/comments/Comments";
import Education from "../../components/education/Education";
import Introduction from "../../components/introduction/Introduction";
import classes from "./Profile.module.css";
import API from "../../api/api";

export default function ProfilePage() {

  const [aboutMeText, setaboutMeText] = useState("");
  const [educationText, setEducationText] = useState("");
  const [comments, setComments] = useState([]);

  const [profileError, setProfileError] = useState(false);

  useEffect(() => {
    API.get("/profile/").then((response) => {
      setaboutMeText(response.data.aboutMe);
      setEducationText(response.data.education);
    }).catch((err) => {
      console.error(err);
      setProfileError(true);
    })
  }, [])

  return (
    <div className={classes.profilePage}>
      <Introduction />
      {profileError ? <p>Oh no, something went wrong! Please try again later</p> : <AboutMe text={aboutMeText} />}
      {profileError ? "" : <Education text={educationText} />}
      <Comments />
    </div>
  );
}
