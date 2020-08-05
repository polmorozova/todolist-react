// import React from 'react';

// const ToDoItem = () => {
//     return (<div>Tasks to do
//     </div>
//     )
// };



import React from 'react';
// import {
//     Icon,
//     IconButton,
//     ListItem, ListItemGraphic, ListItemText, ListItemMeta
// } from 'mdc-react';

// import './index.scss';

// const ToDoItem = () => {

//     return (
//         <div className="todoitem" >
//             <div className="todoitems">
//                 <p>Jgbcfybt pflfxb</p>
//             </div>
//             <div className='input'>
//                 <input type='checkbox'
//                 />
//             </div>
//         </div >
//     );
// }

// export default ToDoItem;
import {
    Icon,
    IconButton,
    ListItem, ListItemGraphic, ListItemText, ListItemMeta
} from 'mdc-react';

import './index.scss';

export default function TodoItem({
    todo,
    onUpdate,
    onDelete,
    onSelect
}) {
    return (
        <ListItem className="todo-list-item">
            <ListItemGraphic>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => onUpdate(todo.id, { completed: !todo.completed })}
                />
            </ListItemGraphic>

            <ListItemText onClick={() => onSelect(todo)}>{todo.title}</ListItemText>

            <ListItemMeta>
                <IconButton onClick={() => onDelete(todo.id)}>
                    <Icon>delete</Icon>
                </IconButton>

                <IconButton onClick={() => onUpdate(todo.id, { important: !todo.important })}>
                    <Icon>{todo.important ? 'star' : 'star_bordered'}</Icon>
                </IconButton>

            </ListItemMeta>
        </ListItem>
    );
}