// will transform into group search
import React, { Component } from 'react';
import GroupIndexItem from './group_index_item';

class GroupIndex extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchGroups();
  }

  render() {
    const { groups, children } = this.props;
    return (
      <section className="group-list">
        <ul>I'm here!</ul>
        <ul>
          {groups.map(group => <GroupIndexItem key={group.id} group={group} />)}
        </ul>
        {children}
      </section>
    );
  }
}

export default GroupIndex;
