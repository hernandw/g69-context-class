const ListUsers = ({ data }) => {
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {data.map((user) => (
        <p key={user.id}>{user.name} - {user.email}</p>
      ))}
    </div>
  );
};

export default ListUsers;
