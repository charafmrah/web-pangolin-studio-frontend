import Link from "next/link";
import { FaUserCircle, FaInfoCircle } from "react-icons/fa";

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
  <Link href="/account">
    <FaUserCircle size="36" className="top-navigation-icon" />
  </Link>
);

const Title = () => (
  <div className="text-2xl title-text">
    <Link href="/">Web Pangolin Studio</Link>
  </div>
);

export default TopBar;
