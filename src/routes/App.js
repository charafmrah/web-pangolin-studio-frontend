import TopBar from '../components/TopBar.js'
import Footer from '../components/Footer.js'
import { Outlet, Link } from 'react-router-dom'
import firebase from 'firebase/compat/app';
import SideBar from '../components/Sidebar.js';

function App() {
  const firebaseApp = firebase.apps[0]
  return (
      <>
        <TopBar />
        <SideBar />
        <div className='min-h-screen pl-5 pr-5 pb-5 md:pb-10 lg:pl-80 lg:pr-80'>
          <Outlet />
        </div>
        <Footer />
      </>
  );
}

export default App;
