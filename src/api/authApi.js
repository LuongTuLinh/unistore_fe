import axiosClient from './axiosClient'

const authApi = {
    signin: (params) => {
        const url = "/auth/signin";
        return axiosClient.post(url, params);
    },
    signup: (params) => {
        const url = `/auth/signup`;
        return axiosClient.post(url, params);
    },
};

export default authApi;