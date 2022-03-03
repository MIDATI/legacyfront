import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
    const renderedList = list.map(
        (item, index) => (
            !item.deleted?
            <Todo
                title={item.title}
                completed={item.completed}
                deleted={item.deleted}
                removeTodoItemProp={(updatedItem) => removeTodoListProp(item._id, updatedItem)}
                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                key={index}
            />: ''
        )
    );
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    );
};

export default List;