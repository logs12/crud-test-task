import projectConfig from './project.config.json';

const ROOT_PAGE = projectConfig.ROOT_URL;

export default {
    ROOT: {
        path: `${ROOT_PAGE}/`,
        name: 'Home',
    },

    USER_VIEW: {
        path: `${ROOT_PAGE}/user-view/:userId`,
        name: 'User view',
    },
    USER_CREATE: {
        path: `${ROOT_PAGE}/user-create`,
        name: 'User create',
    },
    USER_EDIT: {
        path: `${ROOT_PAGE}/user-edit/:userId`,
        name: 'User edit',
    },
};
