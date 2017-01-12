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

        <div className="hero"></div>

      </div>
    );
  }
}


export default Welcome;
