import React , { Component } from 'react';

import { NavLink } from 'react-router-dom';

import './NavBar.css';

import homeIcon from '../../assets/icon/home.png';
import callIcon from '../../assets/icon/call.png';
import friendIcon from '../../assets/icon/friend.png';
import userIcon from '../../assets/icon/user.png';

export default class NavBar extends Component{

    render(){
        let menus = [
            {id:1, name: 'Home' , icon: homeIcon, path:'/' },
            {id:2, name: 'Call' , icon: callIcon, path:'/call'},
            {id:3, name: 'Friends' , icon: friendIcon, path:'/friends'},
            {id:4, name: 'User' , icon: userIcon, path:'/user'},
        ];

        return(
            <div className="nav-bar">
                <NavBarList menus={menus} />
            </div>
        )
    }
}


const NavBarList = (props) =>{
    return(
        <ul className="nav-bar__list">
            {props.menus.map((menu)=>{
                return(
                   <NavBarItem menu={menu} key={menu.id} /> 
                )
            })}
        </ul>
    )
}

const NavBarItem = (props) =>{
    const { menu } = props;

    return(
        <li className="nav-bar__item">
            <NavLink 
                to={menu.path} 
                className="nav-bar__link"
                activeClassName="active"
                exact
            >
                <div className="nav-bar__icon">
                    <img src={menu.icon} alt="icon" className="nav-bar__icon-pic"/>
                </div>
            </NavLink>
        </li>
    )
}