import { connect } from 'react-redux';
import GroupCalendar from './group_calendar';

const mapStateToProps = state => ({
  group: state.groupDetail
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupCalendar);
