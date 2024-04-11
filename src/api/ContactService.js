import axios from "axios";

const API_URL= 'http://localhost:8080/contacts';

export async function saveContact(contact) {
    return await axios.post(API_URL, contact);
}

export async function getContact(page=0, size=10) {
    return await axios.get(`${API_URL}?page=${page}&size=${size}`, contact);
} // ver si no funciona con post

export async function updateContact(contact) {
    return await axios.post(`${API_URL}/${id}`);
}

export async function updatePhoto(formData) {
    return await axios.put(`${API_URL}/photo${id}`, formData);
}

export async function deleteContact(id) {
    return await axios.delete(`${API_URL}/${id}`);
}