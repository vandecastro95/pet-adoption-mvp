import {
    APP_INITIALIZE,
} from './actions';

const initialState = {
    user: null,
    isFetching: true,
    isAuthenticated: false,
};

const reducers = [];

const listIds = [1, 2, 3, 4, 5];

const list = {
    1: {
        type: 'dog', id: 1, name: 'Lucas', sex: 'male', breed: 'Beagle',
        avatar: 'https://images.unsplash.com/photo-1568953530595-c748c83e0429?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    },
    2: {
        type: 'dog', id: 2, name: 'Luna', sex: 'female', breed: 'Corgi',
        avatar: 'https://images.unsplash.com/photo-1554128970-c4b38bec484a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
    },
    3: {
        type: 'dog', id: 3, name: 'Max', sex: 'male', breed: 'Poodle',
        avatar: 'https://images.unsplash.com/photo-1575131622531-7a335abdbbb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    },
    4: {
        type: 'dog', id: 4, name: 'Duke', sex: 'male', breed: 'Pit Bull',
        avatar: 'https://images.unsplash.com/photo-1518887802067-be1f52f6a74e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
    },
    5: {
        type: 'dog', id: 5, name: 'Sadie', sex: 'female', breed: 'Shih Tzu',
        avatar: 'https://images.unsplash.com/photo-1508269302270-c49f6b45654f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    },
}

reducers[APP_INITIALIZE] = (state, action) => {
    return {
        ...state,
        list,
        listIds,
        isFetching: false,
    };
};

export default (state = initialState, action) =>
    action.type in reducers ? reducers[action.type](state, action) : state;