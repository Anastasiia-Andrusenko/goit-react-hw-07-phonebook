
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReduce from "./slices/contactSlice";
import filterReducer from "./slices/filterSlice";

const rootReducer = combineReducers({
    contacts: contactsReduce,
    filter: filterReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;