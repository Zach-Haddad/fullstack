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
			return <Link to="/welcome/signup">sign up instead</Link>;
		} else {
			return <Link to="/welcome/login">log in instead</Link>;
		}
	}

  renderErrors() {
     if(this.props.errors){
       return(
         <ul className='auth-errors'>
           {this.props.errors.map((error, i) => (
             <li key={`error-${i}`}>
               {error}
             </li>
           ))}
         </ul>
       );
     }
   }

	render() {
		// add in later! discipline, etc
		const newUserForms = () => {
			if (this.props.formType === "signup"){
				return (<p>additional signup params here</p>);
			}
		};

		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Welcome to TrekMates!
					<br/>
					Please {this.props.formType} or {this.navLink()}
					<div className="login-form">
            {this.renderErrors()}
						<br/>
						{newUserForms()}
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
						<input className="submit-button" type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
