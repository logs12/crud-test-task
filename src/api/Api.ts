import axios from 'axios';

import projectConfig from 'project.config.json';

export const Api = (headers = {}) =>
    axios.create({
        ...projectConfig.API,
        headers: {
            ...headers
        }
    });

export default Api;