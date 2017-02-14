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

// fix below; renders as null when new user.  group index container is never rendered!
  render(){
    if (!this.props.currentUser){
      hashHistory.push('/welcome');
    }

    const userGroups = this.props.currentUser.groups;
    const userGroupList =
        <div className='user-groups-container'>
          <GroupIndexContainer />
        </div>;


    return(
      <div className='home-container'>
        <p></p>
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

// refactor above for expanded search options in the future!

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
