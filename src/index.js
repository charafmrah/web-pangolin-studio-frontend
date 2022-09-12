import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import About from './routes/about';
import Generator from './routes/generator';
import Account from './routes/account';
import Privacy from './routes/privacy';
import Terms from './routes/terms';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Firebase Configurations:
const firebaseConfig = {

  apiKey: "AIzaSyC0M_TqtaNGJfolW8GQ0OpyrgPRYLwFfVM",

  authDomain: "creators-ai-tools.firebaseapp.com",

  projectId: "creators-ai-tools",

  storageBucket: "creators-ai-tools.appspot.com",

  messagingSenderId: "779221024888",

  appId: "1:779221024888:web:fd0e28b7d831afd1036d8d",

  measurementId: "G-JW12XC7N60"

};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='generator' element={<Generator />} />
          <Route path='about' element={<About />} />
          <Route path='account' element={<Account />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='terms' element={<Terms />} />
          <Route
            path='*'
            element={
              <main style = {{ padding: "1rem" }}>
                <h1 className='flex justify-center text-white text-9xl mt-20 mb-5'>404</h1>
                <p className='flex justify-center text-white text-4xl'>Page not found</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
