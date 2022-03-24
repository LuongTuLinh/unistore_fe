import axiosClient from './axiosClient'

const userApi = {
	// getAll: () => {
	// 	const url = "/user/";
	// 	return axiosClient.get(url);
	// },
	getAll: (params) => {
		const url = "/user/";
		return axiosClient.get(url, {params});
	},
	update: (params) => {
		const url = "/user/"+ params.id;
		return axiosClient.put(url, params);
	},
	mostUser: () => {
		const url = "/user/mostuser";
		return axiosClient.get(url);
	}
}

export default userApi;