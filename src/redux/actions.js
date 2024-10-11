// Определяем действие для установки фильтра

const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});

export default setFilter;
