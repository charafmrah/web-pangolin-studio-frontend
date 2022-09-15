import { BsGearFill } from 'react-icons/bs'
import { FaFire, FaImage } from 'react-icons/fa'
import { ImTextWidth } from 'react-icons/im'

const SideBar = () => {
  return (
        <div className="sidebar">
          <SideBarIcon text='Generate a thumbnail' icon={<FaImage size="24" />} />
          <SideBarIcon text='Title Generator' icon={<ImTextWidth size="20" />} />
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