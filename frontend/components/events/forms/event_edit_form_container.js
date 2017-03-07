import { connect } from 'react-redux';
import eventEditForm from './event_edit_form';
import { editEvent } from '../../../actions/event_actions';
import { clearErrors } from '../../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors,
  currentUserId: state.session.currentUser.id,
  currentGroupId: state.groupDetail.id,
  eventDetail: state.eventDetail
});

const mapDispatchToProps = dispatch => ({
  editEvent: event => dispatch(editEvent(event)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(eventEditForm);
