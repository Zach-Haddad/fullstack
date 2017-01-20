import { UPDATE_FILTER } from '../actions/filter_actions';
// import merge from 'lodash/merge';

const _defaultFilters = Object.freeze({
  ""
});

const FilterReducer = (state = _defaultFilters, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default FilterReducer;
