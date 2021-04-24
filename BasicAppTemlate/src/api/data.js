import * as api from './api.js';

const host = 'http://localhost:3030';//check
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//Implement application-specific requests

// export async function getAllRecords() {
//     return await api.get('/data/listings');
// }

// export async function getRecordById(id) {
//     return await api.get('/data/listings/' + id);
// }

// export async function getMyRecords() {
//     const userId = sessionStorage.getItem('userId');
//     return await api.get(`/data/listings?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
// }

// export async function createRecord(data) {
//     return await api.post('/data/listings', data);
// }

// export async function editRecord(id, data) {
//     return await api.put('/data/listings/' + id, data);
// }

// export async function deleteRecord(id) {
//     return await api.del('/data/listings/' + id);
// }