import Link from "next/link";
import { BsGearFill } from "react-icons/bs";
import { FaImage } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link href="/thumbnail-generator">
        <SideBarIcon text="Generate a thumbnail" icon={<FaImage size="24" />} />
      </Link>
      <Link href="/settings">
        <SideBarIcon text="Settings" icon={<BsGearFill size="22" />} />
      </Link>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
