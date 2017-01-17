import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import GroupReducer from './group_reducer';
import GroupDetailReducer from './group_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupReducer,
  groupDetail: GroupDetailReducer
});

export default RootReducer;
