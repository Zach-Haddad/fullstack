import React from 'react';
import { Link } from 'react-router';

class GroupPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: ""
    };
    // this.addUserToGroup = this.addUserToGroup.bind(this);
    // this.removeUserFromGroup = this.removeUserFromGroup.bind(this);
    // this.editGroup = this.editGroup.bind(this);
    // this.deleteGroup = this.deleteGroup.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if((nextProps.params.groupId) !== this.props.params.groupId){
      this.props.fetchGroup(nextProps.params.groupId);
    }
    this.setState({ name: nextProps.group.name, description: nextProps.group.description});
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.params.groupId);
  }

  render(){
    const { group, children } = this.props;
    return(
      <div className="group-page">
        <div className="group-page-header">  
          <h1>{group.name}</h1>
          <p>{group.description}</p>
          <p>Join/Leave Group</p>
        </div>
        {children}
      </div>
    );
  }
}

export default GroupPage;
