import { createAsyncThunk } from '@reduxjs/toolkit';

import *as api from '../../shared/API/contacts'


export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async (_, thunkAPI) => {
        try {
            const { data } = await api.getAllContacts()
            return data
        } catch ({response}) {
            return thunkAPI.rejectWithValue(response)
        }
    }
)
    
const isDublicate = (contacts, { name }) => {
  const normalizeName = name.toLowerCase();
  const dublicate = contacts.find(
    item => item.name.toLowerCase() === normalizeName
  );
  return Boolean(dublicate);
};


// export const fetchContacts = () => {
//     const func = async (dispatch) => {
//         try {
//             dispatch(actions.fentchContactsPending());
//             const { data } = await api.getAllContacts()
//             console.log(data)
//             dispatch(actions.fentchContactsFulfilled())

//         } catch ({responce}) {
//             dispatch(actions.fentchContactsRejected(responce))
//         }
//     }
//     return func
// } 