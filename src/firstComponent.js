import React, { useState } from "react";
export default function FirstComponent() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <label for="userName">User name:</label>
      <input
        type="text"
        id="userName"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br></br>
      <label for="password">Password:</label>
      <input
        type="text"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br></br>
      <p>{name}</p>
      <button>Login</button>
    </div>
  );
}
