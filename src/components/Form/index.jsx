
import React, { useState } from 'react';
import {
    List, ListItem,
    TextField
} from 'mdc-react';

import './index.scss';

export default function ToDoForm({ onSubmit }) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        onSubmit(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <List>
                <ListItem>
                    <TextField
                        placeholder="Things to do"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                    />
                </ListItem>
            </List>
        </form>
    );
}