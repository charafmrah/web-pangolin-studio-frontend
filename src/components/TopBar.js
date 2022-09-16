import {
  FaUserCircle,
  FaInfoCircle
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className='top-navigation'>
      <Title />
      <a href='https://webpangolin.com/help' target='_blank' rel="noopener noreferrer">
      <SupportIcon />
      </a> 
      <Link to={'/account'}>
        <UserCircle />
      </Link>
    </div>
  )
}

const SupportIcon = () => <FaInfoCircle size='36' className='top-navigation-icon' />
const UserCircle = () => <FaUserCircle size='36' className='top-navigation-icon' />
const Title = () => <h5 className='title-text text-2xl'>Creator AI Tools</h5>

export default TopBar