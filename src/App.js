import React, { useState, useEffect } from "react";
import todos from "./apis";

import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";
import History from "./components/History";

const appTitle = "To-Do App";

const App = () => {
  const [todoList, setTodoList] = useState([todos]);
  let [ newList, setNewList ] = useState(false)
  useEffect(() => {
    async function fetchData() {
      const { data } = await todos.get("/todos");
      setTodoList(data);
    }

    fetchData();
  }, [newList]);

  const addTodo = async (item) => {
    const { data } = await todos.post("/todos", item);
    setTodoList((oldList) => [...oldList, data]);
  };
  const editTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
  };
  const removeTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
    setNewList(!newList);
    console.log(newList);
  };
  return (
    <div className="ui container center aligned">
      <Section>
        <h1>{appTitle}</h1>
      </Section>
      <History taskList={todoList} title="Historial" />
      <Section>
        <Form addTodo={addTodo} />
      </Section>

      <Section>
        <List
          editTodoListProp={editTodo}
          removeTodoListProp={removeTodo}
          list={todoList}
        />
      </Section>
    </div>
  );
};

export default App;
