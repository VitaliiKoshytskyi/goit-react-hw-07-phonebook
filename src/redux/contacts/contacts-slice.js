import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { fetchContacts } from './contacts-operations';

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
}});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;





// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: {
//       reducer: (state, { payload }) => {
//         state.push(payload);
//       },
//       prepare: data => {
//         return {
//           payload: {
//             id: nanoid(),
//             ...data,
//           },
//         };
//       },
//     },
//     deleteContact: (state, { payload }) => {
//       return state.filter(({ id }) => id !== payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// export default contactsSlice.reducer;
