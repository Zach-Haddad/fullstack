import { connect } from 'react-redux';
import GroupIndex from './group_index';
import { fetchGroups } from '../../actions/group_actions';

const mapStateToProps = ( state ) => ({
  currentUser: state.session.currentUser,
  groups: state.groups.groups
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroups: () => dispatch(fetchGroups()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupIndex);
