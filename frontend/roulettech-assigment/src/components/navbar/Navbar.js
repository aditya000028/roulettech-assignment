import { Link } from "react-router-dom";
import profilePicture from "../../ProfilePicture.jpeg";
import { Avatar } from "@mui/material"
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header>
      <div className={classes.aditya}>
        <Avatar alt="profile" src={profilePicture} className={classes.profilePicture} />
        <h1>Aditya Gupta</h1>
      </div>
      <nav>
        <ul className={classes.links}>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
