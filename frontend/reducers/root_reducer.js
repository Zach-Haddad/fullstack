import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import GroupReducer from './group_reducer';
import GroupDetailReducer from './group_detail_reducer';
import EventReducer from './event_reducer';
import EventDetailReducer from './event_detail_reducer';
import ErrorReducer from './error_reducer';
// import FilterReducer from './filter_reducer';
// import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupReducer,
  groupDetail: GroupDetailReducer,
  events: EventReducer,
  eventDetail: EventDetailReducer,
  errors: ErrorReducer
  // filter: FilterReducer
  // viewedUser: UserReducer
});

export default RootReducer;
