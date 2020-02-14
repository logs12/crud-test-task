import {
    takeEvery,
    call,
    put,
    select,
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { push } from 'react-router-redux';
import {
    getUsersApi,
    getUserApi,
    postUsersApi,
    putUsersApi,
    deleteUsersApi,
} from 'api/UserApi';
import { IAction } from 'actions/ActionCreatorTypings';
import {
    GET_USERS_REQUEST,
    GET_USER_REQUEST,
    CREATE_USER_REQUEST,
    EDIT_USER_REQUEST,
    DELETE_USER_REQUEST,
} from 'constants/UserConstants';
import {
    IGetUsersActionPayload,
    getUsersAction,
    getUsersSuccessAction,
    getUsersErrorAction,
    GetUserActionPayloadType,
    getUserSuccessAction,
    getUserErrorAction,
    ICreateUserActionPayloadType,
    createUserSuccessAction,
    createUserErrorAction,
    IEditUserActionPayloadType,
    editUserSuccessAction,
    editUserErrorAction,
    IDeleteUserActionPayloadType,
    deleteUserSuccessAction,
    deleteUserErrorAction,
} from 'actions/UserAction';
import { 
    usersConverter,
    userConverter,
} from 'converters/UsersConverters';
import routes from 'routes';
import { makeSelectUsersPagination } from 'selectors';

function* getUsers({
    payload: {
        pageNumber,
    },
}: IAction<IGetUsersActionPayload>): SagaIterator {
    try {
        const users = yield call(getUsersApi, pageNumber);
        yield put(getUsersSuccessAction(
            usersConverter(users.data.data),
            {
                page: users.data.page,
                perPage: users.data.per_page,
                total: users.data.total,
                totalPages: users.data.total_pages,
            }
        ));
    } catch (e) {
        
        console.log(e);
        yield put(getUsersErrorAction());
    }
}

function* getUser({
    payload: {
        userId,
    },
}: IAction<GetUserActionPayloadType>): SagaIterator {
    try {
        const user = yield call(getUserApi, userId);
        yield put(getUserSuccessAction(userConverter(user.data.data)));
    } catch (e) {
        console.log(e);
        yield put(getUserErrorAction());
    }
}

function* createUsers({
    payload: {
        email,
        firstName,
        lastName,
        avatar,
    },
}: IAction<ICreateUserActionPayloadType>) {
    try {
        yield call(
            postUsersApi,
            email,
            firstName,
            lastName,
            avatar,
        );
        yield put(createUserSuccessAction());
        yield put(push(routes.ROOT.path));
    } catch (e) {
        yield put(createUserErrorAction());
    }
}

function* editUsers({
    payload: {
        userId,
        email,
        firstName,
        lastName,
        avatar,
    },
}: IAction<IEditUserActionPayloadType>) {
    try {
        yield call(
            putUsersApi,
            userId,
            email,
            firstName,
            lastName,
            avatar,
        );
        yield put(editUserSuccessAction());
        yield put(push(routes.ROOT.path));
    } catch (e) {
        yield put(editUserErrorAction());
    }
}

function* deleteUsers({
    payload: {
        userId,
    },
}: IAction<IDeleteUserActionPayloadType>) {
    try {
        yield call(
            deleteUsersApi,
            userId
        );
        yield put(deleteUserSuccessAction());
        const pagination = yield select(makeSelectUsersPagination());
        yield put(getUsersAction(pagination.page));
    } catch (e) {
        yield put(deleteUserErrorAction());
    }
}

export function* watchForUsers() {
    yield takeEvery(GET_USERS_REQUEST, getUsers);
    yield takeEvery(GET_USER_REQUEST, getUser);
    yield takeEvery(CREATE_USER_REQUEST, createUsers);
    yield takeEvery(EDIT_USER_REQUEST, editUsers);
    yield takeEvery(DELETE_USER_REQUEST, deleteUsers);
}