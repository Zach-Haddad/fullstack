import React from 'react';
import { Link, withRouter } from 'react-router';


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

  // userGroups(){
  //   const groups = this.props.currentUser.groups
  //   if (groups){
  //     return
  //   }
  // }


  render(){
    return(
      <div>
        <p>home page content</p>
        <Link to='home/groups'>View All Groups (Temp Index)</Link>
        <div>
          <h5>My Groups</h5>

        </div>
        {this.props.children}
      </div>
    );
  }
}


export default withRouter(Home);
