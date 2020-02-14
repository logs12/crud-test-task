// @flow

import {
    GET_USERS_REQUEST,
    GET_USERS_REQUEST_SUCCESS,
    GET_USERS_REQUEST_FAILED,
    GET_USER_REQUEST,
    GET_USER_REQUEST_SUCCESS,
    GET_USER_REQUEST_FAILED,
} from 'constants/UserConstants';
import { IAction } from 'actions/ActionCreatorTypings';
import { 
    IUsersState,
    initialState,
} from 'models/UserModel';

export function UserReducer(
    state: IUsersState = initialState.state,
    action: IAction<any>,
) {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case GET_USERS_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                pagination: action.payload.pagination,
                pending: false,
            };
        case GET_USERS_REQUEST_FAILED:
            return {
                ...state,
                pending: true,
            };
        case GET_USER_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case GET_USER_REQUEST_SUCCESS:
            return {
                ...state,
                dataById: action.payload.user,
            };
        case GET_USER_REQUEST_FAILED:
            return {
                ...state,
                pending: true,
            };
        default:
            return state;
    }
}