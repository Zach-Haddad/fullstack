import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import { merge } from 'lodash';

class eventEditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.eventDetail.name,
      description: this.props.eventDetail.description,
      date: this.props.eventDetail.date,
      time: this.props.eventDetail.time.slice(11,19),
      location: this.props.eventDetail.location,
      group_id: this.props.eventDetail.group_id,
      event_owner_id: this.props.eventDetail.event_owner_id,
      calendar_date: this.props.eventDetail.calendar_date,
      id: this.props.eventDetail.id
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({calendar_date: new Date(this.state.date + " " + this.state.time)})
    this.props.editEvent(this.state)
      .then(data => {
        hashHistory.push(`/groups/${this.props.currentGroupId}`);});
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

          <button>Edit Event</button>
          <br />
          <br />

          <Link to={`/groups/${this.props.currentGroupId}/events/${this.props.eventDetail.id}`}>Cancel</Link>
        </form>
      </section>
    );
  }
}

export default eventEditForm;
