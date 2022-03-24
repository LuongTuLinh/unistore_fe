import axiosClient from './axiosClient'

const adminApi = {
	check: () => {
		const url = "/admin/check";
		return axiosClient.get(url);
	},
	dashboard: () => {
		const url = "/admin/dashboard";
		return axiosClient.get(url);
	}
}

export default adminApi;