import { connect } from 'react-redux';
import groupForm from './group_form';
import { createGroup } from '../../../actions/group_actions';
import { clearErrors } from '../../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors,
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  createGroup: group => dispatch(createGroup(group)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(groupForm);
