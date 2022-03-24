import axiosClient from './axiosClient'

const orderApi = {
	add: (params) => {
		const url = "/order/add";
		return axiosClient.post(url, params);
	},
	// getAll:() => {
	// 	const url = "/order/";
	// 	return axiosClient.get(url);
	// },
	getAll:(params) => {
		const url = "/order/";
		return axiosClient.get(url, {params});
	},
	orderDetails: (id) => {
		const url = "/order/details/"+id;
		return axiosClient.get(url);
	},
	update: (newOrder) => {
		const url = "/order/"+newOrder.order_id;
		return axiosClient.put(url, newOrder);
	}
};

export default orderApi;