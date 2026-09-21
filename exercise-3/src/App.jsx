import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <h1>User List</h1>

      <UserCard
        name="Ahmed Ali"
        email="ahmed@gmail.com"
      />

      <UserCard
        name="Mohamed Hassan"
        email="mohamed@gmail.com"
      />

      <UserCard
        name="Fatima Abdullahi"
        email="fatima@gmail.com"
      />
    </div>
  );
}

export default App;