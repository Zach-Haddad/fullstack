import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';


const App = ({ children }) => (
  <div>
    <header>
       <Link to="/" className="header-link">
         <h1>TrekMates</h1>
       </Link>
      <GreetingContainer />
    </header>

    { children }

    <footer>
      <p>footer els here</p>
    </footer>
  </div>
);

export default App;
