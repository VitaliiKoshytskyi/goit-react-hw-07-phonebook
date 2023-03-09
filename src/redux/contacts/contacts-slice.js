import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { fetchContacts,addContacts,deleteContact} from './contacts-operations';

const initialState = {
  contacts: [],
  loading: false,
  error:null,
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
    state.loading = true;
      state.error = null;
  })
    .addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.contacts = payload;

    })
    .addCase(fetchContacts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })
    .addCase(addContacts.pending, state => {
    state.loading = true;
      state.error = null;
  })
    .addCase(addContacts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.contacts.push(payload);

    })
    .addCase(addContacts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })
     .addCase(deleteContact.pending, state => {
    state.loading = true;
      state.error = null;
  })
    .addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.contacts = state.contacts.filter(({id})=>id!==payload)

    })
    .addCase(deleteContact.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
  })
}});


export default contactsSlice.reducer;