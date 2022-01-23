import { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setUserList(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="users">
        <h1>Users</h1>
        {userList.map((user) => {
          return (
            <div className="user border rounded">
              <h3>Name: {user.name}</h3>
              <p>age: {user.age}</p>
              <p>username: {user.username}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
