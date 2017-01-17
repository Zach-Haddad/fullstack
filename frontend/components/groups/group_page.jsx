import React from 'react';
import { Link } from 'react-router';

class GroupPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: ""
    };
    this.addUserToGroup = this.props.addUserToGroup.bind(this);
    this.removeUserFromGroup = this.props.removeUserFromGroup.bind(this);
    this.editGroup = this.props.editGroup.bind(this);
    this.deleteGroup = this.props.deleteGroup.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(parseInt(nextProps.params.groupId) !== this.props.params.groupId){
      this.props.fetchGroup(nextProps.params.groupId);
    }
    this.setState({ name: nextProps.group.name, description: nextProps.group.description});
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.params.groupId);
  }

  render(){
    const { group } = this.props;
    return(
      <div className="group_page">
        <h1>{group.name}</h1>
        <p>{group.description}</p>
      </div>
    );
  }
}

export default GroupPage;
