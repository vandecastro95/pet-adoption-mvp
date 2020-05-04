import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dashboardReducer from './reducers/dashboard/reducers'

const rootReducer = history =>
    combineReducers({
        dashboard: dashboardReducer,
        form: formReducer,
    });

export default rootReducer;
