import TopBar from '../components/TopBar.js'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/Sidebar.js';

function App() {

  return (
      <>
        <TopBar />
        <SideBar />
        <div className='flex justify-center min-h-screen pl-5 pr-5 pb-5 md:pb-10 lg:pl-80 lg:pr-80'>
          <Outlet />
        </div>
      </>
  );
}

export default App;
