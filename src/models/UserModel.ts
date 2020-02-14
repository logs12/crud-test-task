import { 
    baseDataModelInitialState,
    IBaseModelData,
} from 'models/BaseModel';

export type UserIdType = string;
export type UserEmailType = string;
export type UserFirstNameType = string;
export type UserLastNameType = string;
export type UserAvatarType = string;

export interface IUser {
    id: UserIdType;
    email: UserEmailType;
    firstName: UserFirstNameType;
    lastName: UserLastNameType;
    avatar: UserAvatarType;
}

export type UsersType = Array<IUser>;

export interface IUsersState extends IBaseModelData {
    data: UsersType;
    dataById: IUser;
};

export const UserDefaultState = {    
    get state(): IUser {
        return {
            id: '',
            email: '',
            firstName: '',
            lastName: '',
            avatar: '',
        };
    }
}

export const initialState = {    
    get state(): IUsersState {
        return {
            data: [],
            dataById: UserDefaultState.state,
            ...baseDataModelInitialState.state
        };
    }
}