import {
    APP_INITIAL_SESSION_REQUEST,
    APP_INITIAL_SESSION_SUCCESS,
    APP_INITIAL_SESSION_FAILURE,
} from './actions';

const initialState = {
    user: null,
    isFetching: true,
    isAuthenticated: false,
    isChangingAvatar: false,
    timeZoneIANA: null,
};

const reducers = [];

reducers[APP_INITIAL_SESSION_REQUEST] = state => ({
    ...state,
    isFetching: true,
});

reducers[APP_INITIAL_SESSION_SUCCESS] = (state, action) => {
    const { dependents, ...user } = action.payload;

    return {
        ...state,
        user,
        isFetching: false,
    };
};

reducers[APP_INITIAL_SESSION_FAILURE] = state => ({
    ...state,
    user: null,
    isFetching: false,
});

export default (state = initialState, action) =>
    action.type in reducers ? reducers[action.type](state, action) : state;