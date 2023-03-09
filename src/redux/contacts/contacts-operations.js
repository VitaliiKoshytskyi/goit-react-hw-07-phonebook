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

export const addContacts = createAsyncThunk(
  'contacts/add',
  async (initialData, thunkAPI) => {
    try {
      const { data } = await api.addContacts(initialData);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  },
  {
    condition: (initialData, thunkAPI) => {
      const { contacts } = thunkAPI.getState();
      const isDublicate = contacts.contacts.find(
        item => item.name.toLowerCase() === initialData.name.toLowerCase()
      );
      if (isDublicate) {
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
