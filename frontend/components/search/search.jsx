import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserGroups = this.handleUserGroups.bind(this);
    this.handleAllGroups = this.handleAllGroups.bind(this);
  }

  update(){
    return e => {
      this.setState({'filter': e.target.value});
      this.props.fetchGroups(this.state);
    };
  }

  handleSubmit(e){
    this.props.fetchGroups(this.state);
  }

  handleUserGroups(e){
    this.props.fetchGroups({filter: '//user'});
  }

  handleAllGroups(e){
    this.props.fetchGroups({filter: '//all'});
  }

  render() {
    return(
      <div className= 'search-container'>
        <form className='search'>
          <input
            value={this.state.filter}
            className='search-input'
            type='text'
            placeholder='Find a Group!'
            onChange={this.update('filter')} />
          <div className='search-buttons'>
            <button onClick={this.handleSubmit}> Search </button>
            <button onClick={this.handleUserGroups}>My Groups</button>
            <button onClick={this.handleAllGroups}>All Groups</button>
          </div>
        </form>

      </div>

    );
  }
}
export default Search;
