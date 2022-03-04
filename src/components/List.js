import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodoListProp, editTodoListProp, todoList }) => {
    const renderedList = list.map(
        (item, index) => (
            <Todo
                title={item.title}
                id={item._id}
                completed={item.completed}
                deleted={item.deleted}
                removeTodoItemProp={(updatedItem) => removeTodoListProp(item._id, updatedItem)}
                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                list={list}
                key={index}
            />
        )
    );
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    );
};

export default List;