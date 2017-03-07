import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import { merge } from 'lodash';

class groupEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.groupDetail.name,
      description: this.props.groupDetail.description,
      id: this.props.groupDetail.id
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
    this.props.editGroup(this.state)
      .then(data => {
        this.props.router.push(`/groups/${this.props.groupDetail.id}`);});
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
        <form className="group-form">
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

          <button onClick={this.handleSubmit}>Edit Group</button>
          <br />
          <br />

          <Link to={`/groups/${this.props.groupDetail.id}`}>Back to Group Page</Link>
        </form>
      </section>
    );
  }
}

export default withRouter(groupEdit);
