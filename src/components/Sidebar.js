import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire } from 'react-icons/fa'

const SideBar = () => {
  return (
        <div className="sidebar">
          <SideBarIcon text='Dashboard' icon={<FaFire size="28" />} />
          <SideBarIcon text='Generate a thumbnail' icon={<BsPlus size="32" />} />
          <SideBarIcon text='Credits' icon={<BsFillLightningFill size="20" />} />
          <SideBarIcon text='Settings' icon={<BsGearFill size="22" />} />
        </div>            
  )
}

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
)


const Divider = () => <hr className="sidebar-hr" />

export default SideBar