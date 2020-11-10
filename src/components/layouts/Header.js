import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
   return (
      <div>
         <header className='header'>
            <div className="container">
               <nav className='main-nav'>
                  <h1>TodoList</h1>
                  <ul className='main-menu'>
                     <Link className='link' to="/">Home</Link>
                     <Link className='link' to="/about">About</Link>
                     <Link className='link' to="/docs">API</Link>
                  </ul>
               </nav>
            </div>
         </header>
      </div>
   );
}

export default Header;