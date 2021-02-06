import {combineReducers} from "redux";

import userHistoryReducer from "./userHistory"
import userListReducer from "./userList";

/**
 *Combining multiple reducers for Redux (In case of need)
 */

const rootReducer = combineReducers({
    userHistoryReducer,
    userListReducer
});

export default rootReducer;
