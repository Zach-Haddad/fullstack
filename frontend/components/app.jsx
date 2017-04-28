import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className="page-background">
    <header>
      <GreetingContainer />
    </header>

    <div className="page">
      { children }
    </div>

  <Footer />
  </div>
);

export default App;
