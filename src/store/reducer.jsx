export default function reducer(state, action) {
    switch (action.type) {
        case 'GET_LISTS':
            return {
                ...state,
                lists: action.payload.lists
            };

        case 'CREATE_LIST':
            return {
                ...state,
                lists: state.lists.concat(action.payload.list)
            };

        case 'DELETE_LIST':
            return {
                ...state,
                lists: state.lists.filter(list => list.id !== action.payload.listId)
            };

        case 'GET_TODOS':
            return {
                ...state,
                todos: action.payload.todos
            };

        case 'GET_LIST_TODOS':
            return {
                ...state,
                todos: action.payload.todos
            };

        case 'CREATE_TODO':
            return {
                ...state,
                todos: state.todos.concat(action.payload.todo)
            };

        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.todo.id) {
                        return {
                            ...todo,
                            ...action.payload.todo
                        }
                    }
                    return todo
                })
            };

        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.todoId)
            };

        default:
            return state;
    }
};