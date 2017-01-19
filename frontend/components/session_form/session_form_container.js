import { connect } from 'react-redux';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors
});

// messy code below; determining path on consecutive clicks of same button
// yielded 'ogin' or 'ignup'
const mapDispatchToProps = (dispatch, { location }) => {
  let formType = location.pathname[0] ===
    "/" ? location.pathname.slice(9) : location.pathname.slice(8);

  const processForm = (formType === 'login') ? login : signup;

  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
