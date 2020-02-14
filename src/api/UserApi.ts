import Api from 'api/Api';
import ApiPath from 'api/ApiPaths';
import {
    PageNumberType
} from 'models/PaginationModel';
import { 
    UserIdType,
    UserEmailType,
    UserFirstNameType,
    UserLastNameType,
    UserAvatarType,
} from 'models/UserModel';

export const getUsersApi = (pageNumber: PageNumberType): Promise<any> => 
    Api().get(ApiPath.getUsers.replace(':pageNumber', String(pageNumber)));

export const getUserApi = (userId: UserIdType): Promise<any> => 
    Api().get(ApiPath.getUser.replace(':userId', String(userId)));

export const postUsersApi = (
    email: UserEmailType,
    firstName: UserFirstNameType,
    lastName: UserLastNameType,
    avatar: UserAvatarType,
): Promise<any> => Api().post(
    ApiPath.postUser,
    {
        email,
        firstName,
        lastName,
        avatar,
    }
);

export const putUsersApi = (
    userId: UserIdType,
    email: UserEmailType,
    firstName: UserFirstNameType,
    lastName: UserLastNameType,
    avatar: UserAvatarType,
): Promise<any> => Api().put(
    ApiPath.putUser.replace(':userId', String(userId)),
    {
        email,
        firstName,
        lastName,
        avatar,
    }
);

export const deleteUsersApi = (userId: UserIdType): Promise<any> => 
    Api().delete(ApiPath.deleteUser.replace(':userId', String(userId)));