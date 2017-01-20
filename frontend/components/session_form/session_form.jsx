import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
	}

	componentDidUpdate(nextProps) {
    if (this.props.route.path !== nextProps.route.path){
      this.props.clearErrors();
    }
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/home");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return (
        <p className='auth-text'>Not a member? <Link className='auth-link' to="/welcome/signup">Sign up here</Link></p>);
		} else {
			return (
        <p className='auth-text'>Already a member? <Link className='auth-link' to="/welcome/login">Log in here</Link></p>);
		}
	}

  buttonText(){
    return this.props.formType === "login" ? "Log in" : "Sign up";
  }


  renderErrors() {
     if(this.props.errors){
       return(
         <div className='auth-errors'>
           {this.props.errors.map((error, i) => (
             <p key={`error-${i}`}>
               {error}
             </p>
           ))}
         </div>
       );
     }
   }

	render() {
		// add in later! discipline, etc
		// const newUserForms = () => {
		// 	if (this.props.formType === "signup"){
		// 		return (<p>additional signup params here</p>);
		// 	}
		// };

		return (
			<div className="login-form-container">
				<form className="login-form-box">
					<h2>Welcome to TrekMates!</h2>
					<div className="login-form">
            {this.renderErrors()}
						<br/>
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
            <br/>
						<button onClick={this.handleSubmit} className="submit-button">{this.buttonText()}</button>
            <br/>
            <br/>
            {this.navLink()}
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
