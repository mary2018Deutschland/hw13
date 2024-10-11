import UserItem from "./UserItem";

const UserList = ({ users, filter }) => {
  const filtredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filtredUsers.map((user) => (
        <UserItem key={user.id} name={user.name} />
      ))}
    </div>
  );
};

export default UserList;
