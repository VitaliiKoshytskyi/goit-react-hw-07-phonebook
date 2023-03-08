import {  combineReducers } from "redux";

import filterReducer from "./filter/filter-slice";
import contactsReducer from "./contacts/contacts-slice";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter:filterReducer,
})

export default rootReducer