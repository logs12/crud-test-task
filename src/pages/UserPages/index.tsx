import './index.scss';
import React, { useEffect } from 'react';
import WithUser from 'containers/WithUser';
import { useHistory } from 'react-router-dom'
import {
    IUser,
    UsersType,
    UserIdType,
    initialState,
} from 'models/UserModel';
import {
    IGetUsersAction,
    IDeleteUserAction,
} from 'actions/UserAction';
import routes from 'routes';
import { IPagination } from 'models/PaginationModel';
import Pagination from 'components/Pagination';

interface UsersPageProps {
    users: UsersType;
    pagination: IPagination,
    getUsersAction: IGetUsersAction,
    deleteUserAction: IDeleteUserAction,
}

const UsersPage: React.FC<UsersPageProps> = ({
    users,
    pagination,
    getUsersAction,
    deleteUserAction,
}) => {
    let history = useHistory();

    useEffect(() => {
        getUsersAction(0);
    }, initialState.state.data);

    const handleClickCreateUser = (): void => {
        history.push(routes.USER_CREATE.path);
    }

    const handleClickEditUser = (userId: UserIdType): void => {
        history.push(
            routes.USER_EDIT.path.replace(':userId', String(userId)),
            { userId }
        );
    }

    const handleClickViewUser = (userId: UserIdType): void => {
        history.push(routes.USER_VIEW.path.replace(':userId', String(userId)));
    }

    const handleClickDeleteUser = (userId: UserIdType): void => {
        deleteUserAction(userId);
    }

    return (
        <div className="users-list">
            <h2>Users List</h2> 
            <a 
                className="users-list__create-link"
                onClick={() => { handleClickCreateUser() }}
            >
                Create user
            </a>
            <div className="term-grid grid-header">
                <label>user id</label>
                <label>email</label>
                <label>first name</label>
                <label>last name</label>
                <label>avatar</label>
                <label>actions</label>
            </div>
            {
                users.map((user: IUser) => (
                    <div 
                        key={user.id}
                        className="term-grid"
                    >
                        <div className="term-grid__item">{user.id}</div>
                        <div className="term-grid__item">{user.email}</div>
                        <div className="term-grid__item">{user.firstName}</div>
                        <div className="term-grid__item">{user.lastName}</div>
                        <div className="term-grid__item">
                            <img 
                                src={user.avatar}
                                alt={user.firstName}
                            />
                        </div>
                        <div className="term-grid__item">
                            <a 
                                className="term-grid__item-a"
                                onClick={() => { handleClickViewUser(user.id) }}
                            >
                                View
                            </a>
                            <a 
                                className="term-grid__item-a"
                                onClick={() => { handleClickEditUser(user.id) }}
                            >
                                Edit
                            </a>
                            <a 
                                className="term-grid__item-a"
                                onClick={() => { handleClickDeleteUser(user.id) }}
                            >
                                Delete
                            </a>
                        </div>
                    </div>
                ))
            }
            <Pagination
                { ...pagination }
                changePage={getUsersAction}
                entityName="users"
            />
        </div>
    );
};

export default WithUser()(UsersPage);