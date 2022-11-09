import { BsGearFill } from "react-icons/bs";
import { FaImages } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to={"/thumbnail-generator"}>
        <SideBarIcon
          text="Generate a thumbnail"
          icon={<FaPaintBrush size="24" />}
        />
      </Link>

      <Link to={"/gallery"}>
        <SideBarIcon text="Gallery" icon={<FaImages size="24" />} />
      </Link>

      <Link to={"/shop"}>
        <SideBarIcon
          text="Shop for styles"
          icon={<FaShoppingBag size="23" />}
        />
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
