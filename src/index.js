import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import ThumbnailGenerator from './routes/ThumbnailGenerator';
import Account from './routes/Account';
import TitleGenerator from './routes/TitleGenerator';
import Settings from './routes/Settings';
import SignUp from './routes/SignUp';
import LogIn from './routes/LogIn';
import ForgotPassword from './routes/ForgotPassword';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='generator' element={<ThumbnailGenerator />} />
          <Route path='title-generator' element={<TitleGenerator />} />
          <Route path='settings' element={<Settings />} />
          <Route path='account' element={<Account />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<LogIn />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
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
