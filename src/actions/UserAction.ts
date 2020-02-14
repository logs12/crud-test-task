import { IAction } from 'actions/ActionCreatorTypings';
import {
    PageNumberType,
    IPagination,
} from 'models/PaginationModel';
import {
    UserIdType,
    IUser,
    UsersType,
    UserEmailType,
    UserFirstNameType,
    UserLastNameType,
    UserAvatarType,
} from 'models/UserModel';
import {
    GET_USERS_REQUEST,
    GET_USERS_REQUEST_SUCCESS,
    GET_USERS_REQUEST_FAILED,
    GET_USER_REQUEST,
    GET_USER_REQUEST_SUCCESS,
    GET_USER_REQUEST_FAILED,
    CREATE_USER_REQUEST,
    CREATE_USER_REQUEST_SUCCESS,
    CREATE_USER_REQUEST_FAILED,
    EDIT_USER_REQUEST,
    EDIT_USER_REQUEST_SUCCESS,
    EDIT_USER_REQUEST_FAILED,
    DELETE_USER_REQUEST,
    DELETE_USER_REQUEST_SUCCESS,
    DELETE_USER_REQUEST_FAILED,
} from 'constants/UserConstants';


export interface IGetUsersActionPayload { pageNumber: PageNumberType; };
export interface IGetUsersAction { (pageNumber: PageNumberType): IAction<IGetUsersActionPayload> };
export const getUsersAction = (pageNumber: PageNumberType): IAction<IGetUsersActionPayload> => ({
    type: GET_USERS_REQUEST,
    payload: {
        pageNumber,
    },
});

type GetUsersSuccessActionPayloadType = { 
    data: UsersType,
    pagination: IPagination,
};
export const getUsersSuccessAction = (
    data: UsersType,
    pagination: IPagination,
): IAction<GetUsersSuccessActionPayloadType> => ({
    type: GET_USERS_REQUEST_SUCCESS,
    payload: {
        data,
        pagination,
    },
});

type GetUsersErrorActionPayloadType = { };
export const getUsersErrorAction = (): IAction<GetUsersErrorActionPayloadType> => ({
    type: GET_USERS_REQUEST_FAILED,
    payload: {},
});


export type GetUserActionPayloadType = { userId: UserIdType };
export interface IGetUserAction { (userId: UserIdType): IAction<GetUserActionPayloadType> };
export const getUserAction = (userId: UserIdType): IAction<GetUserActionPayloadType> => ({
    type: GET_USER_REQUEST,
    payload: {
        userId,
    },
});

type GetUserSuccessActionPayloadType = { user: IUser };
export const getUserSuccessAction = (user: IUser): IAction<GetUserSuccessActionPayloadType> => ({
    type: GET_USER_REQUEST_SUCCESS,
    payload: {
        user,
    },
});

type GetUserErrorActionPayloadType = { };
export const getUserErrorAction = (): IAction<GetUserErrorActionPayloadType> => ({
    type: GET_USER_REQUEST_FAILED,
    payload: {},
});

export interface ICreateUserActionPayloadType {
    email: UserEmailType;
    firstName: UserFirstNameType;
    lastName: UserLastNameType;
    avatar: UserAvatarType;
};
export interface ICreateUserAction { (
    email: UserEmailType,
    firstName: UserFirstNameType,
    lastName: UserLastNameType,
    avatar: UserAvatarType,
): IAction<ICreateUserActionPayloadType> };
export const createUserAction = (
    email: UserEmailType,
    firstName: UserFirstNameType,
    lastName: UserLastNameType,
    avatar: UserAvatarType,
): IAction<ICreateUserActionPayloadType> => ({
    type: CREATE_USER_REQUEST,
    payload: {
        email,
        firstName,
        lastName,
        avatar,
    },
});

type CreateUserSuccessActionPayloadType = {};
export const createUserSuccessAction = (): IAction<CreateUserSuccessActionPayloadType> => ({
    type: CREATE_USER_REQUEST_SUCCESS,
    payload: {},
});

type CreateUserErrorActionPayloadType = {};
export const createUserErrorAction = (): IAction<CreateUserErrorActionPayloadType> => ({
    type: CREATE_USER_REQUEST_FAILED,
    payload: {},
});

export interface IEditUserActionPayloadType { 
    userId: UserIdType,
    email: UserEmailType,
    firstName: UserFirstNameType,
    lastName: UserLastNameType,
    avatar: UserAvatarType,
};
export interface IEditUserAction { (
    userId: UserIdType,
    email: UserEmailType,
    firstName: UserFirstNameType,
    lastName: UserLastNameType,
    avatar: UserAvatarType,
): IAction<IEditUserActionPayloadType> };
export const editUserAction = (
    userId: UserIdType,
    email: UserEmailType,
    firstName: UserFirstNameType,
    lastName: UserLastNameType,
    avatar: UserAvatarType,
 ): IAction<IEditUserActionPayloadType> => ({
    type: EDIT_USER_REQUEST,
    payload: { 
        userId,
        email,
        firstName,
        lastName,
        avatar,
    },
});

type EditUserSuccessActionPayloadType = {};
export const editUserSuccessAction = (): IAction<EditUserSuccessActionPayloadType> => ({
    type: EDIT_USER_REQUEST_SUCCESS,
    payload: {},
});

type EditUserErrorActionPayloadType = {};
export const editUserErrorAction = (): IAction<EditUserErrorActionPayloadType> => ({
    type: EDIT_USER_REQUEST_FAILED,
    payload: {},
});

export interface IDeleteUserActionPayloadType { userId: UserIdType };
export interface IDeleteUserAction { (userId: UserIdType): IAction<IDeleteUserActionPayloadType> };
export const deleteUserAction = ( userId: UserIdType ): IAction<IDeleteUserActionPayloadType> => ({
    type: DELETE_USER_REQUEST,
    payload: { userId },
});

type DeleteUserSuccessActionPayloadType = {};
export const deleteUserSuccessAction = (): IAction<DeleteUserSuccessActionPayloadType> => ({
    type: DELETE_USER_REQUEST_SUCCESS,
    payload: {},
});

type DeleteUserErrorActionPayloadType = {};
export const deleteUserErrorAction = (): IAction<DeleteUserErrorActionPayloadType> => ({
    type: DELETE_USER_REQUEST_FAILED,
    payload: {},
});