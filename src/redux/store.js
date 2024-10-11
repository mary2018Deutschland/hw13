import { createStore } from "redux";
// Импортируем корневой редьюсер
import usersReduser from "./reducer";

const store = createStore(usersReduser);

export default store;
