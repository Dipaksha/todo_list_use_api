import React, { useState, useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import "./listContainer.css";

const ListContainer = () => {
  const [listArray, setListArray] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const todos = res.data;
      setListArray(todos);
    });
  }, []);
  const onCheckboxChange = (index) => {
    const newListArray = [...listArray];
    newListArray.map((t) => {
      if (t.id === index) {
        t.completed = !t.completed;
      }
      return t;
    });
    setListArray(newListArray);
  };

  const deleteTodoItem = (id) => {
    const deleteTodo = listArray.filter((item) => item.id !== id);
    setListArray(deleteTodo);
  };

  return (
    <Grid item sm={12} md={10}>
      {listArray.map((listItem, index) => {
        return (
          <List key={listItem.id}>
            <Paper>
              <ListItem>
                <Typography>
                  <span
                    className={
                      listItem.completed ? "crossed-line" : "none-line"
                    }
                  >
                    {index + 1}
                    {".  "}
                    {listItem.title.charAt(0).toUpperCase() +
                      listItem.title.slice(1)}
                  </span>
                  <Checkbox
                    checked={listItem.completed}
                    onChange={() => {
                      onCheckboxChange(listItem.id);
                    }}
                  ></Checkbox>
                </Typography>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  className={listItem.completed ? "crossed-line" : "none-line"}
                  onClick={() => {
                    deleteTodoItem(listItem.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            </Paper>
          </List>
        );
      })}
    </Grid>
  );
};
export default ListContainer;
