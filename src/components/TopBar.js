import { FaUserCircle, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="top-navigation">
      <Title />

      <SupportIcon />

      <UserCircle />
    </div>
  );
};

const SupportIcon = () => (
  <a
    href="https://webpangolin.com/help"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInfoCircle size="36" className="top-navigation-icon" />
  </a>
);

const UserCircle = () => (
  <Link to={"/account"}>
    <FaUserCircle size="36" className="top-navigation-icon" />
  </Link>
);

const Title = () => (
  <Link to={"/"} className="title-text text-2xl">
    Creator AI Tools
  </Link>
);

export default TopBar;
