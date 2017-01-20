import React from 'react';
import { Link } from 'react-router';

class GroupPage extends React.Component {

  constructor(props){
    super(props);
    this.addUserToGroup = this.addUserToGroup.bind(this);
    this.removeUserFromGroup = this.removeUserFromGroup.bind(this);
    // this.editGroup = this.editGroup.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.params.groupId);
  }

  addUserToGroup(){
    this.props.addUserToGroup({group_id: this.props.group.id, member_id: this.props.currentUser.id})
  }

  removeUserFromGroup(){
    this.props.removeUserFromGroup({group_id: this.props.group.id, member_id: this.props.currentUser.id})
  }

  deleteGroup(){
    this.props.deleteGroup(this.props.group.id)
      .then(() => this.props.router.push("/home"));
  }

  joinToggleButton(){
    if (this.props.group.members){
      const userId = this.props.currentUser.id;
      if (this.props.group.group_owner_id !== userId){
          if (this.props.group.memberIds.includes(userId)){
              return(<button onClick={this.removeUserFromGroup}>Leave Group</button>)
            } else {
              return(<button onClick={this.addUserToGroup}>Join Group</button>);
          }
      } else {
        return (<button onClick={this.deleteGroup}>Delete Group</button>);
      }
    }
  }

  createEventButton(){

  }
  // only if member

  render(){
    const { group, children } = this.props;
    if (group.members === undefined){
      return (<div></div>);
    } else {
      return(
        <div className="group-page">
          <div className="group-page-header">
            <h1>{group.name}</h1>
            <p>{group.description}</p>
            <p>{this.joinToggleButton()}</p>
          </div>

          <div className="group-page-body">
          <aside className="group-page-sidebar">
              <p>Group Since: {Date(group.created_at).slice(4, 15)}</p>
              <p>Created By: {group.owner.username}</p>
              <p>Number of members: {group.members.length}</p>
              <p><button><Link to={`groups/${group.id}/events/new`}>Add an Event!</Link></button></p>
          </aside>

          <div className="group-page-right">
            {children}
          </div>
          </div>

          <Link to='/home'>Back to Homepage</Link>
        </div>
      );
    }
  }
}


export default GroupPage;
