import axiosClient from './axiosClient'

const catalogAPI = {
    getAll: (params) => {
        const url = "/products";
        return axiosClient.get(url, { params });
    },
    getByAdmin: (params) => {
        const url = "/products/all";
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    update: (product) => {
        const url = "/products/"+product.productId;
        return axiosClient.put(url, product);
    },
    insert: (product) => {
        const url = "products/insert";
        return axiosClient.post(url, product);
    },
    mostSold: () => {
        const url = "products/mostsold";
        return axiosClient.get(url);
    }
};

export default catalogAPI;