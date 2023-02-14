import React from "react";
import List from "../components/List";
import { Grid, Container } from "@mui/material";

const TodoList = () => {
  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <h1>Todo List</h1>
        <List />
      </Container>
    </React.Fragment>
  );
};
export default TodoList;
