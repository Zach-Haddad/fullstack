import React from 'react';
import { Link } from 'react-router';
import GroupCalendar from './group_calendar';

class GroupPage extends React.Component {

  constructor(props){
    super(props);
    this.addUserToGroup = this.addUserToGroup.bind(this);
    this.removeUserFromGroup = this.removeUserFromGroup.bind(this);
    // this.editGroup = this.editGroup.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
    this.createEventButton = this.createEventButton.bind(this);
    this.calendarButton = this.calendarButton.bind(this);
    this.groupHomeButton = this.groupHomeButton.bind(this);
    this.homeButton = this.homeButton.bind(this);
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

  editButton(){
    if (this.props.currentUser.id === this.props.group.group_owner_id) {
      const editRoute = () => {(
        this.props.router.push(`groups/${this.props.group.id}/edit`)
      );};
      return(
        <button onClick={editRoute}>Edit Group</button>
      );
    }
  }

  createEventButton(){
    const eventRoute = () => {(
      this.props.router.push(`groups/${this.props.group.id}/events/new`)
    );};
    if (this.props.group.memberIds.includes(this.props.currentUser.id)){
      return(
        <p><button onClick={eventRoute}>Add an Event!</button></p>
      );
    }
  }

  calendarButton(){
    const calendarRoute = () => {(
      this.props.router.push(`groups/${this.props.group.id}/calendar`)
    );};
    return(
      <button onClick={calendarRoute}>Calendar</button>
    );
  }


  groupHomeButton(){
    const groupHomeRoute = () => {(
      this.props.router.push(`groups/${this.props.group.id}`)
    );};
    return(
      <button onClick={groupHomeRoute}>Group Home</button>
    );
  }

  homeButton(){
    const homeRoute = () => {(
      this.props.router.push(`/home`)
    );};
    return(
      <button onClick={homeRoute}>Main Page</button>
    );
  }

  // TODO: responsive rendering of nav buttons; eq calendar button not showing up on calendar page
  // if (this.props.router.location.pathname.includes('calendar'))
  // currently link won't rerender buttons, may have to refactor group nav into own component
  // with sep redux cycle

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
              <div className="group-page-nav">
                {this.joinToggleButton()}
                {this.homeButton()}
                {this.groupHomeButton()}
                {this.calendarButton()}
                {this.editButton()}
              </div>
          </div>

          <div className="group-page-body">
            {this.props.router.location.pathname !== `/groups/${group.id}/events/new` && this.props.router.location.pathname !== `/groups/${group.id}/edit`&&
                <aside className="group-page-sidebar">
                    <p>Group Since: {Date(group.created_at).slice(4, 15)}</p>
                    <p>Created By: {group.owner.username}</p>
                    <p>Number of members: {group.members.length}</p>
                    {this.createEventButton()}
                </aside>
            }

          <div className="group-page-right">
            {children}
          </div>
          </div>
        </div>
      );
    }
  }
}


export default GroupPage;
