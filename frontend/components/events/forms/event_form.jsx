import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import { merge } from 'lodash';

class eventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      date: "",
      time: "",
      location: "",
      group_id: this.props.currentGroupId,
      event_owner_id: this.props.currentUserId
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state)
      .then(data => {
        hashHistory.push(`/groups/${this.state.groupId}`);});
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  renderErrors() {
     if(this.props.errors){
       return(
         <ul className='group-errors'>
           {this.props.errors.map((error, i) => (
             <li key={`error-${i}`}>
               {error}
             </li>
           ))}
         </ul>
       );
     }
   }

  render(){
    return(
      <section className="event-form-container">
        <ul>
          {this.renderErrors()}
        </ul>

        <form className="event-form" onSubmit={this.handleSubmit}>
          <label>What is the name of your event?</label>
          <br />
          <br />
            <input
              type="text"
              value={this.state.name}
              placeholder="Name"
              onChange={this.update('name')}
            />
          <br />
          <br />
          <label>Describe your event!</label>
          <br />
          <br />
            <textarea
              type="text"
              value={this.state.description}
              placeholder="Description"
              onChange={this.update('description')}
            />
          <br />
          <br />

          <label>Where will your event take place?</label>
          <br />
          <br />
            <input
              type="text"
              value={this.state.location}
              placeholder="Location"
              onChange={this.update('location')}
            />
          <br />
          <br />

          <label>When will your event take place?</label>
          <br />
          <br />
            <input
              type="date"
              value={this.state.date}
              onChange={this.update('date')}
            />
          <br />
            <input
              type="time"
              value={this.state.time}
              onChange={this.update('time')}
            />
          <br />
          <br />

          <button>Create Event</button>
          <br />
          <br />

          <Link to={`/groups/${this.props.currentGroupId}`}>Cancel</Link>
        </form>
      </section>
    );
  }
}

export default eventForm;
