import React from 'react';
import { Link } from 'react-router';


class Welcome extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        welcome page goes here
      {this.props.children}
      </div>
    );
  }
}


export default Welcome;
