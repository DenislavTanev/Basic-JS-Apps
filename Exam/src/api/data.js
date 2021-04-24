import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllRecords() {
    return await api.get('/data/wiki?sortBy=_createdOn%20desc');
}

export async function getRecentRecord() {
    return await api.get(`/data/wiki?sortBy=_createdOn%20desc&distinct=category`);
}

export async function getRecordById(id) {
    return await api.get('/data/wiki/' + id);
}

export async function getFilteredRecords(title) {
    return await api.get(`/data/wiki?where=title%20LIKE%20%22${title}%22`);
}

export async function createRecord(data) {
    return await api.post('/data/wiki', data);
}

export async function editRecord(id, data) {
    return await api.put('/data/wiki/' + id, data);
}

export async function deleteRecord(id) {
    return await api.del('/data/wiki/' + id);
}