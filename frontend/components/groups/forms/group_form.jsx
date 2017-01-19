import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import { merge } from 'lodash';

class groupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      // group_owner_id: this.props.currentUserId
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    // const ownerId = this.props.currentUserId;
    // const newGroup = merge({}, this.state, {group_owner_id: ownerId});
    this.props.createGroup(this.state)
      .then(data => {
        hashHistory.push(`/groups/${data.group.id}`);});
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
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
    return (
      <section className="group-form-container">
        <ul>
          {this.renderErrors()}
        </ul>
        <form className="group-form" onSubmit={this.handleSubmit}>
          <label>What is the name of your group?</label>
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
          <label>Describe your group!</label>
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

          <button>Create Group</button>
          <br />
          <br />

          <Link to='/home'>Back to Homepage</Link>
        </form>
      </section>
    );
  }
}

export default groupForm;
