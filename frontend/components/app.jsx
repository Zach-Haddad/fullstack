import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import Footer from './footer/footer';


const App = ({ children }) => (
  <div>
    <header>
      <GreetingContainer />
    </header>

    { children }

  <Footer />
  </div>
);

export default App;
