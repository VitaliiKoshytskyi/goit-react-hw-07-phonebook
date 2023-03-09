import axios from "axios";

const contactsInstance = axios.create({
    baseURL:"https://6407100277c1a905a0ec1e72.mockapi.io/contacts"
})
export const getAllContacts = () => contactsInstance.get("/")

export const addContacts = (data) => contactsInstance.post("/", data)

export const deleteContacts = (id) =>contactsInstance.delete(`/${id}`)