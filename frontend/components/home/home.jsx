import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupIndexContainer from './group_index_container';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userId: this.props.currentUser.id
    };
  }

  componentDidUpdate(){
    if (!this.props.currentUser){
      this.props.router.push('/welcome');
    }
  }

  render(){
    const userGroups = this.props.currentUser.groups;
    const userGroupList = (userGroups[0] ? (
      <div className='user-group-list'>
        <h4>My Groups</h4>
        <div className='user-groups'>
          <GroupIndexContainer groups={userGroups} />
        </div>
      </div>
    ) : null);

    return(
      <div>
        <p>home page content</p>
        <Link to='home/groups'>View All Groups (Temp Index)</Link>
        <div>
          {userGroupList}
        </div>
        {this.props.children}
      </div>
    );
  }
}

// my groups -- render a group index, pass in the users groups from
// this.props.currentUser.groups; each as an index item

export default withRouter(Home);
