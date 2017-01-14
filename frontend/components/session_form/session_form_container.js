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
  let formType = location.pathname[0] ===
    "/" ? location.pathname.slice(9) : location.pathname.slice(8);

  const processForm = (formType === 'login') ? login : signup;

  return {
    // clearSessionErrors: () => dispatch(clearSessionErrors()),
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
