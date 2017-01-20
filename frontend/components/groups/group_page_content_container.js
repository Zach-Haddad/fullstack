// list of events
import {connect} from 'react-redux';
import GroupPageContent from './group_page_content';

const mapStateToProps = state => ({
  group: state.groupDetail,
  events: state.groupDetail.events
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupPageContent);
