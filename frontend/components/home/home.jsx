import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import GroupIndexContainer from './group_index_container';
import EventIndexContainer from './event_index_container';
import SearchContainer from '../search/search_container';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userId: this.props.currentUser.id
    };
  }

  // temporary fix below, logging out does not precede render unless explicitly
  // inserted into render function.  Various lifecycle methods not working!

  render(){
    if (!this.props.currentUser){
      hashHistory.push('/welcome');
    }

    const userGroups = this.props.currentUser.groups;
    const userGroupList = (userGroups[0] ? (
      <div className='user-group-list'>
        <div className='user-groups'>
          <GroupIndexContainer />
        </div>
      </div>
    ) : null);

    return(
      <div>
        <p>home page content</p>
        <SearchContainer />
        <div>
          {userGroupList}
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Home);

// Fix this later:

// const userEvents = this.props.currentUser.events;
// const userEventList = (userEvents !== undefined ? (
//   <div className='user-event-list'>
//     <h4>My Events</h4>
//     <div className='user-events'>
//       <EventIndexContainer events={userEvents} />
//     </div>
//   </div>
// ) : null);
