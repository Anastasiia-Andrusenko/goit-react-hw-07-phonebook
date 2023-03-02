import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await api.getAllContacts();

      return response;
    }
    catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const response = await api.addContact(data);
      return response;
    }
    catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  },
  {
    condition: ({name, number}, {getState}) => {
        const {contacts} = getState();
        const normalizedName = name.toLowerCase();
        const result = contacts.items.find(({ name }) => {
          return (name.toLowerCase() === normalizedName && number)
        })
        if(result){
          alert(`${name} is already in contacts.`);
          return false;
        }
      }
  }
);


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await api.deleteContact(id);
      return id;
    }
    catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);


