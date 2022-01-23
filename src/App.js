import { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [userList, setUserList] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setUserList(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      setUserList([...userList, { name, age, username }]);
    });
  };

  return (
    <div className="App">
      <h1 className="my-3">Users</h1>
      <div className="row m-5">
        <div className="col form">
          <div className="m-3 p-3 border rounded">
            <div className="mt-3">
              <input
                type="text"
                placeholder="Name..."
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mt-3">
              <input
                type="number"
                placeholder="Age..."
                onChange={(event) => setAge(event.target.value)}
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                placeholder="Username..."
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="mt-3">
              <button className="btn btn-primary" onClick={createUser}>
                Create User
              </button>
            </div>
          </div>
        </div>
        <div className="col users text-muted">
          {userList.map((user) => {
            return (
              <div className="user border rounded py-3 m-3" key={user.id}>
                <h5>Name: {user.name}</h5>
                <p>age: {user.age}</p>
                <p>username: {user.username}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
