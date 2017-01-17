import { connect } from 'react-redux';
import groupForm from './group_form';
import { createGroup } from '../../../actions/group_actions';

const mapStateToProps = state => ({
  errors: state.groups.errors,
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  createGroup: group => dispatch(createGroup(group))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(groupForm);
