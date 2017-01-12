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
        <img className="hero" src='http://res.cloudinary.com/zach/image/upload/v1484184470/8tjbrqgkfyu-david-marcu_bgudkd.jpg'/>
        </div>
        <p>Description</p>
      </div>
    );
  }
}


export default Welcome;
