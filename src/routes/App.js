import logo from './logo.svg'
import './App.css'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import { Outlet, Link } from 'react-router-dom'
import Title from './components/Title'
import firebase from 'firebase/compat/app';

function App() {
  const firebaseApp = firebase.apps[0]
  return (
    <div className='min-h-screen pl-5 pr-5 pb-5 md:pb-10 lg:pl-80 lg:pr-80'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
