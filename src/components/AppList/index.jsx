import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Button,
    Drawer, DrawerHeader, DrawerContent,
    Icon,
    IconButton,
    Layout,
    List, ListItem, ListItemGraphic, ListItemText, ListItemMeta,
    ListDivider,
    ListGroup,
    TextField,
} from 'mdc-react';

import useStore from '../../hooks/store';

import './index.scss'

export default function AppList({ lists }) {
    const { state, actions } = useStore();
    const [isListFormOpen, setListFormOpen] = useState(false);
    const [listTitle, setListTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        actions.createList({
            title: listTitle,
            userId: state.user.uid
        }).then(() => {
            setListTitle('');
            setListFormOpen(false);
        })
    };

    return (
        <Drawer
            id="app-drawer"
        >
            <DrawerHeader
                title="React Todo"
            >
            </DrawerHeader>

            <DrawerContent>
                <ListGroup>
                    <List>
                        {[
                            { title: 'Tasks', icon: 'home', to: '/', exact: true },
                            { title: 'Important', icon: 'star', to: '/important' },
                            { title: 'Done', icon: 'event', to: '/completed' },
                        ].map(item =>
                            <ListItem
                                key={item.icon}
                                component={NavLink}
                                to={item.to}
                                exact={item.exact}
                                activeClassName="mdc-list-item--activated"
                            >
                                <ListItemGraphic>
                                    <Icon>{item.icon}</Icon>
                                </ListItemGraphic>

                                <ListItemText>
                                    {item.title}
                                </ListItemText>
                            </ListItem>
                        )}
                    </List>

                    <ListDivider element="hr" />

                    <List>
                        {lists.map(item =>
                            <ListItem
                                key={item.id}
                                component={NavLink}
                                to={item.id}
                                activeClassName="mdc-list-item--activated"
                            >
                                <ListItemGraphic>
                                    <Icon>list</Icon>
                                </ListItemGraphic>

                                <ListItemText>
                                    {item.title}
                                </ListItemText>
                                <ListItemMeta>
                                    <IconButton onClick={() => actions.deleteList(item.id)}>
                                        <Icon>delete</Icon>
                                    </IconButton>
                                </ListItemMeta>
                            </ListItem>
                        )}
                    </List>
                    <Layout className="open-add-input">
                        {isListFormOpen ?
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    placeholder="New List"
                                    value={listTitle}
                                    onChange={(e) => setListTitle(e.target.value)}
                                    fullWidth

                                />
                            </form>
                            :
                            <Button
                                icon={<Icon>add</Icon>}
                                onClick={() => setListFormOpen(true)}
                            >Add List</Button>
                        }
                    </Layout>
                </ListGroup>
            </DrawerContent>
        </Drawer>
    );
}