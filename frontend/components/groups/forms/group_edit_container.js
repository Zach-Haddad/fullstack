import { connect } from 'react-redux';
import groupEdit from './group_edit';
import { editGroup } from '../../../actions/group_actions';
import { clearErrors } from '../../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors,
  currentUserId: state.session.currentUser.id,
  groupDetail: state.groupDetail
});

const mapDispatchToProps = dispatch => ({
  editGroup: group => dispatch(editGroup(group)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(groupEdit);
