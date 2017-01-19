import { connect } from 'react-redux';
import EventPage from './event_page';
import { fetchEvent, addUserToEvent,
          removeUserFromEvent, deleteEvent} from '../../actions/event_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  event: state.eventDetail
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  addUserToEvent: (data) => dispatch(addUserToEvent(data)),
  removeUserFromEvent: (id) => dispatch(removeUserFromEvent(id)),
  deleteEvent: (id) => dispatch(deleteEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventPage);
