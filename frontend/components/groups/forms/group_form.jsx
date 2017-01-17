import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

class groupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
  e.preventDefault();
  const newGroup = merge({}, this.state, {group_owner_id: this.props.currentUserId});
  this.props.createGroup(newGroup)
    .then(data => {
      this.props.router.push(`/groups/${data.group.id}`);});
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  errors() {
   if (this.props.errors) {
     return (
       this.props.errors.map(error => {
         return (<li className="error" key={error}>{error}</li>);
       })
     );
   }
  }

  render(){
    return (
      <section className="group-form-container">
        <ul>
          {this.errors()}
        </ul>
        <form className="group-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.name}
              placeholder="Name"
              onChange={this.update('name')}
            />
            <textarea
              type="text"
              value={this.state.description}
              placeholder="Description"
              onChange={this.update('description')}
            />
          <button>Create Group</button>
        </form>
      </section>
    );
  }
}

export default groupForm;
