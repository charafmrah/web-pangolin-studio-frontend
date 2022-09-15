import {
  FaUserCircle,
  FaInfoCircle
} from 'react-icons/fa'

const TopBar = () => {
  return (
    <div className='top-navigation'>
      <Title />
      <SupportIcon />
      <UserCircle />
    </div>
  )
}

const SupportIcon = () => <FaInfoCircle size='24' className='top-navigation-icon' />
const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />
const Title = () => <h5 className='title-text'>Creator AI Tools</h5>

export default TopBar