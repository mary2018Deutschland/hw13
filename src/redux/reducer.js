// Определите начальное состояние, содержащее список пользователей и строку фильтра.
const initialState = {
  users: [
    { id: 1, name: "Mascha" },
    { id: 2, name: "Sascha" },
    { id: 3, name: "Liubov" },
  ],
  filter: "",
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      // Возвращаем новое состояние с обновлённым фильтром
      return {
        ...state,
        filter: action.payload, // Изменяем только значение фильтра
      };
    default:
      return state; // По умолчанию возвращаем текущее состояние
  }
};

export default usersReduser;
