import React from 'react';
import ReactDOM from 'react-dom';

import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import {UserSearch as UserSearchRef}  from "./refs/UserSearch";
import EventComponent from "./events/EventComponent";

const App = () => {
    return (
        <div>
            <UserSearch />
            <hr />
            <UserSearchRef />
            <hr />
            <GuestList />
            <hr />
            <EventComponent />
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));