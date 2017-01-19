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
    let groupList;
    if (groups[0]){
      groupList = groups.map(group => (
        <GroupIndexItem key={group.id} group={group} />
        )
      );
    }
    return (
      <section className="group-list">
        <ul>I'm here!</ul>
        {groupList}
        {children}
      </section>
    );
  }
}

export default GroupIndex;
