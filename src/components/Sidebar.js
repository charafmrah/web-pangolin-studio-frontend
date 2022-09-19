import { BsGearFill } from "react-icons/bs";
import { FaImage } from "react-icons/fa";
import { ImTextWidth } from "react-icons/im";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to={"/generator"}>
        <SideBarIcon text="Generate a thumbnail" icon={<FaImage size="24" />} />
      </Link>
      <Link to={"/title-generator"}>
        <SideBarIcon text="Title Generator" icon={<ImTextWidth size="20" />} />
      </Link>
      <Link to={"/settings"}>
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
