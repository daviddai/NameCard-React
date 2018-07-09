import {createStore} from "redux";
import {addCardReducer} from "../reducers/addCardReducer";

const store = createStore(addCardReducer);

export default store;