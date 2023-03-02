import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
//   reducers: {
//     addContact: {
//       reducer: (store, { payload }) => { store.push(payload) },
//       prepare: data => {
//         return {
//           payload: {
//             id: nanoid(),
//             ...data,
//         }
//       }
//     }},
//     deleteContact: (store, { payload }) => store.filter(contact => contact.id !== payload),
//   }
// });

// export const { addContact, deleteContact } = contactsSlice.actions; 

// export default contactsSlice.reducer;


import { fetchContacts, addContact, deleteContact } from "redux/contacts-operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (store) => {
        store.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(addContact.pending, (store) => {
        store.loading = true;
      })
      .addCase(addContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(addContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(deleteContact.pending, (store) => {
        store.loading = true;
      })
      .addCase(deleteContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
  }
})

export default contactSlice.reducer;