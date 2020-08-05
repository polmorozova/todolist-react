import React, { useState } from 'react';
import {
    TextField
} from 'mdc-react';

import useStore from '../../hooks/store';
import './index.scss';

export default function TodoDetails({ todo }) {
    const { actions } = useStore();
    const [changeTask, setChangeTask] = useState(todo.title);

    function changeTaskTodo(event) {
        event.preventDefault()
        actions.updateTodo(todo.id, { title: changeTask });
    }
    return (
        <aside className="todo-details">
            <form onSubmit={changeTaskTodo} >
                <TextField
                    placeholder="Название"
                    value={changeTask}
                    onChange={(e) => setChangeTask(e.target.value)}
                />
            </form>
        </aside>
    );
}