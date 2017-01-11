import React from 'react';
import { Link } from 'react-router';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userId: this.props.currentUser.id
    };
  }

  render(){
    const personalGreeting = (currentUser, logout) => (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    );


  }



}


export default Home;
