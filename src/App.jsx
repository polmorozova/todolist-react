import React from 'react';
// import ToDo from './components/ToDo';
// import ToDoItem from './components/ToDoItem/ToDoItem';

import { Switch, Route } from 'react-router-dom';

import './App.scss';


//     return (
//         <div classname="App">
//             <ToDo />
//         </div>)
// };


// cost mapDispatchToProps = (dispatch) => addToDo: () => ({ dispatch({ type: 'ADD_TODO', todo: })) })

// import useStore from './hooks/store';

import Drawer from './components/Drawer';
import AppContent from './components/AppContent';
import ListPage from 'pages';

import './App.scss';

export default function App() {
    return (
        <div className="App">
            <Drawer
            // lists={lists}
            />
            <AppContent>
                <Switch>
                    <Route exact path="/" component={ListPage} />
                    <Route exact path="/important" component={ListPage} />
                    <Route exact path="/completed" component={ListPage} />
                    <Route path="/:listId/:todoId?" component={ListPage} />
                </Switch>
            </AppContent>
        </div>
    );
}