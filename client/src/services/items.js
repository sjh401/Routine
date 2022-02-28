import api from './api-config';

export const getAllItems = async () => {
    try {
        let res = await api.get(`/items`);
        return res.data
    } catch (e) {
        return ({ errors: e })
    }
}

export const getItem = async (id) => {
    try {
        let res = await api.get(`/items/${id}`);
        return res.data
    } catch (e) {
        return ({ errors: e })
    }
}

export const postItem = async (itemData) => {
    try {
        let res = await api.post(`/items`, { item: itemData });
        return res.data;
    } catch (e) {
        return ({ errors: e })
    }
}

export const putItem = async (id, itemData) => {
    try {
        let res = await api.put(`/items/${id}`, { item: itemData });
        return res.data;
    } catch (e) {
        return ({ errors: e })
    }
}

export const deleteItem = async (id) => {
    try {
        let res = await api.delete(`/items/${id}`);
        return res.data;
    } catch (e) {
        return ({ errors: e })
    }
}