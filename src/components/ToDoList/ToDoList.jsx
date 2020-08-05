// import React from 'react';
// // import {
// //     List
// // } from 'mdc-react';
// import { ToDoItem } from '../../ToDoItem';

// import './index.scss';

// export const ToDoList = ({ items }) => {
//     // return <ToDoItem text={items[0]} />
//     return <ul>{items.map((item) =>
//         <ToDoItem text={item} />
//     )}</ul>
// }
// // return <div>{items}</div>


import React from 'react';
import {
    List
} from 'mdc-react';

import TodoListItem from '../TodoListItem';

import './index.scss';

export default function TodoList({
    todos,
    onUpdate,
    onDelete,
    onSelect
}) {
    return (
        <List className="todo-list">
            {todos.map(todo =>
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    onSelect={onSelect}
                />
            )}
        </List>
    );
}