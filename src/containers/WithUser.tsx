
import * as React from "react";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
    UsersType,
    UserIdType,
    IUser,
    UserEmailType,
    UserFirstNameType,
    UserLastNameType,
    UserAvatarType,
} from 'models/UserModel';
import {
    PageNumberType
} from 'models/PaginationModel';
import {
    makeSelectUsersData,
    makeSelectUsersPagination,
    makeSelectUsersPending,
    makeSelectEditUserData,
    makeSelectUserById,
} from 'selectors';
import {
    IGetUsersAction,
    getUsersAction,
    IGetUserAction,
    getUserAction,
    ICreateUserAction,
    createUserAction,
    IEditUserAction,
    IDeleteUserAction,
    editUserAction,
    deleteUserAction,
} from 'actions/UserAction';
import {
    PendingType,
} from 'models/BaseModel';
import { IPagination } from 'models/PaginationModel';
import { IState } from 'store';

type StateProps = {
    users: UsersType,
    userById: IUser,
    pagination: IPagination,
    pending: PendingType,
    editUserData: IUser,
}

type DispatchProps = {
    getUsersAction: IGetUsersAction,
    getUserAction: IGetUserAction,
    createUserAction: ICreateUserAction,
    editUserAction: IEditUserAction,
    deleteUserAction: IDeleteUserAction,
}

export type UsersProps = StateProps & DispatchProps;


const WithUsers = () => (WrappedComponent: React.ComponentType<any>) => {
    class UsersWrapper extends React.PureComponent<UsersProps, any> {
        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }

    const mapStateToProps = createStructuredSelector<IState, StateProps>({
        userById: makeSelectUserById(),
        users: makeSelectUsersData(),
        pagination: makeSelectUsersPagination(),
        pending: makeSelectUsersPending(),
        editUserData: makeSelectEditUserData(),
    });

    const mapDispatchToProps = (dispatch: Dispatch) => ({
        getUsersAction: (pageNumber: PageNumberType = 0) => dispatch(getUsersAction(pageNumber)),
        getUserAction: (userId: UserIdType) => dispatch(getUserAction(userId)),
        createUserAction: (
            email: UserEmailType,
            firstName: UserFirstNameType,
            lastName: UserLastNameType,
            avatar: UserAvatarType,
        ) => dispatch(createUserAction(
            email,
            firstName,
            lastName,
            avatar,
        )),
        editUserAction: (
            userId: UserIdType,
            email: UserEmailType,
            firstName: UserFirstNameType,
            lastName: UserLastNameType,
            avatar: UserAvatarType,
        ) => dispatch(editUserAction(
            userId,
            email,
            firstName,
            lastName,
            avatar,
        )),
        deleteUserAction: (userId: UserIdType) => dispatch(deleteUserAction(userId)),
    });

    const connector = connect(
        mapStateToProps,
        mapDispatchToProps,
    );
    return connector(UsersWrapper);
};

export default WithUsers;