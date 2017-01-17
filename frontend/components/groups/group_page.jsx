import React from 'react';
import { Link } from 'react-router';

class GroupPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: ""
    };
    this.addUserToGroup = this.addUserToGroup.bind(this);
    this.removeUserFromGroup = this.removeUserFromGroup.bind(this);
    this.editGroup = this.editGroup.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
  }

  render(){
    return(
    <li></li>
    );
  }

}

export default GroupPage;
