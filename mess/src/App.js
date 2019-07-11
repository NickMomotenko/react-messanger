import React , { Component } from 'react';

import SearchForm from './components/SearchForm';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';

export default class App extends Component{
    render(){
        return(
            <div className="app">
                <div className="app__wrapp">
                    <div className="app__bar">
                        <SearchForm />
                        <NavBar />
                    </div>
                    <MainContent />
                </div>
            </div>
        )
    }
}