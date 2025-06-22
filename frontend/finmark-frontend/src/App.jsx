import { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:8000/auth/login", {
        username,
        password,
      });
      setMessage(res.data.message);
    } catch (error) {
      setMessage("Login failed");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-2">Login</h1>
      <input className="border p-1 mr-2" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input className="border p-1 mr-2" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button className="bg-blue-500 text-white p-1" onClick={login}>Login</button>
      <p className="mt-2">{message}</p>
    </div>
  );
}

export default App;