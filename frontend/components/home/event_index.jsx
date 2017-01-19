import React, { Component } from 'react';
import EventIndexItem from './group_index_item';

class EventIndex extends Component {
  constructor(props){

  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render(){

  }
}

export default EventIndex;
