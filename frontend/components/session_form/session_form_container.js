import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

// messy code below; determining path on consecutive clicks of same button
// yielded 'ogin' or 'ignup'
const mapDispatchToProps = (dispatch, { location }) => {
  let path = location.pathname.slice(9);
  let formType;
    switch (path) {
      case 'login':
        formType = 'login';
        break;
      case 'signup':
        formType = 'signup';
        break;
      case 'ogin':
        formType = 'login';
        break;
      case 'ignup':
        formType = 'signup';
        break;
      default:
        formType = 'login';
        break;
    }

  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
