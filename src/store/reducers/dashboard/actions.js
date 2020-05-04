export const APP_INITIAL_SESSION_REQUEST = 'app/initial/session/request';
export const APP_INITIAL_SESSION_SUCCESS = 'app/initial/session/success';
export const APP_INITIAL_SESSION_FAILURE = 'app/initial/session/failure';

export const getUserInitialState = () => ({
    types: [
        APP_INITIAL_SESSION_REQUEST,
        APP_INITIAL_SESSION_SUCCESS,
        APP_INITIAL_SESSION_FAILURE,
    ],
});