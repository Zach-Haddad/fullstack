import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = ( state ) => ({
  currentUser: state.session.currentUser,
  events: state.groupDetail.events
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
