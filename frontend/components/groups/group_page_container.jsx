import { connect } from 'react-redux';
import GroupPage from './group_page';
import { fetchGroup, editGroup, addUserToGroup,
          removeUserFromGroup, deleteGroup} from '../../actions/group_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  group: state.groupDetail
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: (id) => dispatch(fetchGroup(id)),
  editGroup: (group) => dispatch(editGroup(group)),
  addUserToGroup: (data) => dispatch(addUserToGroup(data)),
  removeUserFromGroup: (id) => dispatch(removeUserFromGroup(id)),
  deleteGroup: (id) => dispatch(deleteGroup(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupPage);
