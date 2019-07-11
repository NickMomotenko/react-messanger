import React, {Component} from 'react';

import './SearchForm';

import Input from '../Input';

export default class SearchForm extends Component{
    render() {
        return(
            <form className="search">
                <div className="search__input">
                    <Input />
                </div> 
            </form>
        )
    }
}