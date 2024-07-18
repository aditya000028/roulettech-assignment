import profilePicture from "../../pictures/ProfilePicture.jpeg";
import { Avatar } from "@mui/material";
import classes from "./Navbar.module.css";
import { AiFillLinkedin, AiFillGithub, AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <header>
      <div className={classes.aditya}>
        <Avatar
          alt="profile"
          src={profilePicture}
          className={classes.profilePicture}
        />
        <h1>Aditya Gupta</h1>
      </div>
      <nav>
        <ul className={classes.links}>
          <li>
            <a
              href="https://www.linkedin.com/in/aditya-gupta-developer/"
              target="_blank"
              rel="noreferrer author"
            >
              <AiFillLinkedin className={classes.icon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.portofaditya.com/"
              target="_blank"
              rel="noreferrer author"
            >
              <IoGlobeOutline className={classes.icon} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/aditya000028"
              target="_blank"
              rel="noreferrer author"
            >
              <AiFillGithub className={classes.icon} />
            </a>
          </li>
          <li>
            <a href="mailto:aditya.g000028@gmail.com">
              <MdEmail className={classes.icon} />
            </a>
          </li>
          <li>
            <a href="tel:+14255243452">
              <AiFillPhone className={classes.icon} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
