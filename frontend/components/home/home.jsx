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

  render(){
    return(
      <div>
        <p>home page content</p>
        <p>my groups/my events</p>
      </div>
    );
  }
}


export default withRouter(Home);
