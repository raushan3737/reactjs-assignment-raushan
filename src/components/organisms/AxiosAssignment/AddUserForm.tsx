import React, { useState } from "react";
import { User } from "./UsersList";
import axios from "axios";
import { ThemeProvider } from "@mui/material";
import theme from "../../../utils/Theme/theme";
import Typography from "../../atoms/Typography";
import { API_URL } from "../../../services/API/api";

const AddUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser: User = {
      id: new Date().getTime(),
      name,
      email,
    };
    axios
      .post(`${API_URL}/users`, newUser)
      .then(() => {
        setName("");
        setEmail("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography text={"Add User"} variant="h1" />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </ThemeProvider>
  );
};

export default AddUserForm;
