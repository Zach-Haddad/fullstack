import React from 'react';
import { Link } from 'react-router';


class Welcome extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="welcome-container">
        {this.props.children}

        <div className="hero-frame">
          <div className="hero-content">
            <div className="hero-text">
              <p>Find Local Athletes For Your Next Outdoor Adventure</p>
            </div>

            <div className="hero-buttons"></div>
          </div>
        </div>
      </div>
    );
  }
}


export default Welcome;
