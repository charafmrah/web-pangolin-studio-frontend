import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon text='Dashboard' icon={<FaFire size="28" />} />
        <Divider />
        <SideBarIcon text='Generate a thumbnail' icon={<BsPlus size="32" />} />
        <SideBarIcon text='Credits' icon={<BsFillLightningFill size="20" />} />
        <Divider />
        <SideBarIcon text='Settings' icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;