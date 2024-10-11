import Filter from "./components/Filter";
import UserList from "./components/UserList";
import "./App.css";
import { connect } from "react-redux";
import setFilter from "./redux/actions";

function App({ users, filter, setFilter }) {
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="App">
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <UserList users={users} filter={filter} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});
const mapDispatchToProps = {
  setFilter: setFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
