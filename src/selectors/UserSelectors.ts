import { createSelector } from 'reselect';
import { IState } from 'store';
import { 
    UserDefaultState,
} from 'models/UserModel';

const selectUsers = (state: IState) => state.users;
const selectRouter = (state: IState) => state.router;

const makeSelectUsersData = () => createSelector(
    selectUsers,
    (substate) => substate.data,
);

const makeSelectEditUserData = () => createSelector(
    selectUsers,
    selectRouter,
    (substate, router) => {
        if (router.location.state && router.location.state.hasOwnProperty('userId')) {
            const user = substate.data.find((user) => { return user.id === router.location.state.userId});
            if (user) {
                return user;
            }
        }
        return UserDefaultState.state;
    },
);

const makeSelectUserById = () => createSelector(
    selectUsers,
    (substate) => substate.dataById,
);

const makeSelectUsersPagination = () => createSelector(
    selectUsers,
    (substate) => substate.pagination,
);

const makeSelectUsersPending = () => createSelector(
    selectUsers,
    (substate) => substate.pending,
);

export {
    makeSelectUsersData,
    makeSelectEditUserData,
    makeSelectUserById,
    makeSelectUsersPagination,
    makeSelectUsersPending,
};
