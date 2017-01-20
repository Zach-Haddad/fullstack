import {connect} from 'react-redux';
import Search from './search';
import {updateFilter} from '../../actions/filter_actions';
import {fetchGroups} from '../../actions/group_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter) => dispatch(updateFilter(filter)),
  fetchGroups: (filter) => dispatch(fetchGroups(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Search);
