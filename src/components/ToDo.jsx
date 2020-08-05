import React, { useState } from 'react';
import { ToDoList } from './ToDoList/ToDoList';

export const ToDo = () => {
    const [todos, setToDos] = useState(['Tasks', 'Important', 'Done'])
    const addToDo = (todo) => {
        setToDos([...todos, todo])
    }
    return <><ToDoList items={todos} />
        <button onClick={() => { addToDo('New task') }}>Add task</button>
    </>
};