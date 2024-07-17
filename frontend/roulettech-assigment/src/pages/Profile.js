import Introduction from "../components/introduction/Introduction";
import classes from "./Profile.module.css";

export default function ProfilePage() {
  return (
    <div className={classes.profilePage}>
      <Introduction />
    </div>
  );
}
