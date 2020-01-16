import React from 'react';

import AppHeader from "../app-header";
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from "../item-status-filter";
import AddButton from "../add-button";

import './app.css';

export default class App extends React.Component {
    maxId = 100;

    createTodoItem = (label) => {
        return {
            label,
            done: false,
            important: false,
            id: this.maxId++
        };
    };

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a Lunch')
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }
        })
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArray
            }
        })
    };

    toggleProperty(arr, id, propName){
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];

        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
        }
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
           return {
               todoData: this.toggleProperty(todoData, id, 'done')
           }
        });
    };

    render() {
        const { todoData } = this.state;

        const doneCount = todoData.filter((item) => item.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>

                <AddButton
                    onAdd={this.addItem}/>
            </div>
        );
    }
};
