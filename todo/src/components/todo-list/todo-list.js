import React from 'react';
import './todo-list.css';

import TodoListItem from "../todo-list-item";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

    const elements = todos.map((item) => {
        const {id, shown, ...itemData} = item;

        const style = {
            display: shown ? 'block' : 'none'
        };

        return (
            <li key={id}
                className="list-group-item"
                style={style}
            >

                <TodoListItem
                    {...itemData}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}/>
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;
