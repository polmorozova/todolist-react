import React from 'react';
import {
    MenuItem,
    TopAppBar
} from 'mdc-react';

export default function Header({ title, onSortChange }) {
    return (
        <>
            <TopAppBar
                title={title}
            />
            {title === 'Tasks' || title === 'Important' || title === 'Done' ?
                <div></div> :
                <div>
                    <MenuItem onClick={() => onSortChange('title')}>by name</MenuItem>
                    <MenuItem onClick={() => onSortChange('important')}>by importance</MenuItem>
                    <MenuItem onClick={() => onSortChange('complete')}>by done</MenuItem>
                </div>
            }
        </>
    );
}