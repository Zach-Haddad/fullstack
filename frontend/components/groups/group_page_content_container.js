// list of events
import {connect} from 'react-redux';
import GroupPageContent from './group_page_content';
import { fetchGroup } from '../../actions/group_actions';

const mapStateToProps = state => ({
  group: state.groupDetail,
  events: state.groupDetail.events
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: (id) => dispatch(fetchGroup(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupPageContent);
