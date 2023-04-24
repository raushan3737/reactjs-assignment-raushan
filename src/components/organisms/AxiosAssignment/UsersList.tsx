import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ThemeProvider } from "@mui/material";
import theme from "../../../utils/Theme/theme";
import Typography from "../../atoms/Typography";
import { API_URL } from "../../../services/API/api";

export interface User {
  id: number;
  name: string;
  email: string;
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>(`${API_URL}/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id: number) => {
    axios
      .delete(`${API_URL}/users/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography text={"Users List"} />
      <Card>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </Card>
    </ThemeProvider>
  );
};

export default UsersList;
