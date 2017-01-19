import { connect } from 'react-redux';
import eventForm from './event_form';
import { createEvent } from '../../../actions/event_actions';
import { clearErrors } from '../../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors,
  currentUserId: state.session.currentUser.id,
  currentGroupId: state.groupDetail.id
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(eventForm);
