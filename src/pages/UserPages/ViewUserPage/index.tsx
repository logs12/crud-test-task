import './index.scss';
import React, { useEffect } from 'react';
import WithUser from 'containers/WithUser';
import { useParams } from "react-router";
import {
    IUser,
} from 'models/UserModel';
import {
    IGetUserAction,
} from 'actions/UserAction';

interface UsersPageProps {
    userById: IUser;
    userId: IUser;
    getUserAction: IGetUserAction,
}

const ViewUserPage: React.FC<UsersPageProps> = ({
    userById,
    getUserAction,
}) => {

    const { userId } = useParams();
    
    useEffect(() => {
        if (userId) {
            getUserAction(userId);
        }
    }, []);

    return (
        <div className="view-user-page">
            <div className="view-user-page__user-avatar">
                <img 
                    alt={userById.firstName}
                    src={userById.avatar}
                />
            </div>
            <div className="view-user-page_property">
                <strong>id:</strong> {userById.id}
            </div>
            <div className="view-user-page_property">
                <strong>email:</strong> {userById.email}
            </div>
            <div className="view-user-page_property">
                <strong>first name:</strong> {userById.firstName}
            </div>
            <div className="view-user-page_property">
                <strong>last name:</strong> {userById.lastName}
            </div>
        </div>
    );
};

export default WithUser()(ViewUserPage);