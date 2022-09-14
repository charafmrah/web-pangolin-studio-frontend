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
import About from './routes/About';
import Generator from './routes/Generator';
import Account from './routes/Account';
import Privacy from './routes/Privacy';
import Terms from './routes/Terms';


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
