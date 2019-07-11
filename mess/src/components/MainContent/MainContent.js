import React from 'react';
import { Route } from 'react-router-dom';

import './MainContent.css';

import Home from '../Home';
import Call from '../Call';
import Friends from '../Friends';
import Profile from '../Profile';
import Chat from '../Chat';
import TelephoneCall from '../TelephoneCall';
import VideoCall from '../VideoCall';

const MainContent = () =>{
    return(
        <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/call" component={Call} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/user" component={Profile} />
            <Route path="/chat" component={Chat} />
            <Route path="/call/tel" component={TelephoneCall} />
            <Route path="/call/video" component={VideoCall} />
        </div>
    )
}

export default MainContent;