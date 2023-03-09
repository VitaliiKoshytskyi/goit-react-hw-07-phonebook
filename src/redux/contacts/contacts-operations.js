import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/API/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

const isDublicate = (contacts, { name }) => {
  const normalizeName = name.toLowerCase();
  const dublicate = contacts.find(
    item => item.name.toLowerCase() === normalizeName
  );
  return Boolean(dublicate);
};

export const addContacts = createAsyncThunk(
  'contacts/add',
  async (initialData, thunkAPI) => {
      try {
          const { data } = await api.addContacts(initialData)
          console.log(data)
          return data
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  },
  {
    condition: (initialData, thunkAPI) => {
      const { contacts } = thunkAPI.getState();
      if (isDublicate(contacts.items, initialData)) {
        alert(`${initialData.name} is already in contacts`);
        return false;
      }
    },
  }
);


export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      await api.deleteContacts(id);
      return id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);