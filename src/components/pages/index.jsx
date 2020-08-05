import React, { useState } from 'react';
import {
    Icon,
    IconButton,
    Layout,
    SideSheet,
    Typography
} from 'mdc-react';

import useStore from '../../hooks/store';

import PageHeader from '../../components/PageHeader'
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/Form';
import TodoDetails from '../../components/TodoDetails';

import './index.scss';

export default function ListPage({ match }) {
    const { state, actions } = useStore();
    const [selectedTodo, setSelectedTodo] = useState(null);

    function handleSubmit(title) {
        actions.createTodo({
            title,
            userId: state.user.uid,
            listId: list.id || ''
        });
    }

    function handleDelete(todoId) {
        actions.deleteTodo(todoId);
    }

    function handleUpdate(todoId, data) {
        actions.updateTodo(todoId, data);
    }

    function handleSelect(todo) {
        setSelectedTodo(todo);
    }

    function handleSortChange(sort) {
        actions.updateList(list.id, { sort })
    }

    const path = match.path;
    const list = state.lists.find(list => list.id === match.params.listId) || { title: 'Задачи' };
    if (path === '/') {
        list.title = "Задачи"
    } else if (path === '/important') {
        list.title = 'Важно'
    } else if (path === '/completed') {
        list.title = 'Завершенные'
    }

    const sortFn = {
        title: (a, b) => a.title.localeCompare(b.title),
        important: (a, b) => b.important - a.important,
        completed: (a, b) => b.completed - a.completed
    };

    const getTodosByFilter = ({
        '/': todos => todos,
        '/important': todos => todos.filter(todo => todo.important),
        '/completed': todos => todos.filter(todo => todo.completed),

    });

    const getTodosByList = (listId, todos) => todos.filter(todo => todo.listId === listId);

    const todos = match.params.listId ? getTodosByList(match.params.listId, state.todos) : getTodosByFilter[path](state.todos);
    const sortedTodos = list.sort ? todos.slice().sort(sortFn[list.sort]) : todos;

    console.log(list.sort)

    return (
        <Layout id="list-page" className="page">
            <PageHeader
                title={list.title}
                sortBy={list.sort}
                onSortChange={handleSortChange}
            />
            <Layout row>
                <SideSheet
                    open={selectedTodo}
                    dismissible
                    appContentSelector=".mdc-side-sheet-app-content"
                >
                    <Layout row justifyContent="between" alignItems="center">
                        <Typography noMargin>Детали задачи</Typography>

                        <IconButton onClick={() => setSelectedTodo(null)}>
                            <Icon>close</Icon>
                        </IconButton>
                    </Layout>

                    {selectedTodo &&
                        <TodoDetails
                            todo={selectedTodo}
                        />
                    }
                </SideSheet>

                <Layout column className="mdc-side-sheet-app-content">
                    <TodoList
                        list={list}
                        todos={sortedTodos}
                        onSelect={handleSelect}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />

                    <TodoForm
                        onSubmit={handleSubmit}
                    />
                </Layout>
            </Layout>
        </Layout>
    );
}