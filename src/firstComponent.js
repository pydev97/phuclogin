import React, { useState } from "react";
import axios from "axios";

export default function FirstComponent() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleOnClick = () => {
    console.log("hihi");
    axios
      .post(
        `https://login.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG9fe4g9fhX0E79DFwLnraPmxZXxXLPAkQQeW9.oBzmrl0amqG5ZYcqUYYNM5R6EmQcADnzRDyV6ONN_H7f&client_secret=4336182B87DAE4A5B6D78CC20A00E724E0E779BDE322B8BE0792D95CC09E6CA9&username=lequyphuc@luvina.net&password=pydev_phuc1997`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  return (
    <div>
      <label htmlFor="userName">User name:</label>
      <input
        type="text"
        id="userName"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br></br>
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br></br>
      <p>{name}</p>
      <button onClick={handleOnClick}>Login</button>
    </div>
  );
}
