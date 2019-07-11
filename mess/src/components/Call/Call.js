import React from 'react';

import { Link } from 'react-router-dom';

import './Call.css';


import id_1 from '../../assets/contacts/1.jpg';
import id_2 from '../../assets/contacts/2.jpg';
import id_3 from '../../assets/contacts/3.jpg';
import id_4 from '../../assets/contacts/4.jpg';

import phoneIcon from '../../assets/call/phone.png';
import videoIcon from '../../assets/call/video.png';

const Call = () =>{
    let calls = [
        {
            id:1,
            photo:id_3,
            name: 'Carlos',
            surname: 'Manicos',
            isOnline: true,
            message:'See you tommorow',
            time:'9.45 pm',
        },
        {
            id:2,
            photo:id_2,
            name: 'Shamay',
            surname: 'Marshal',
            isOnline: false,
            message:'Ok. We are doing this right now',
            time:'1.14 pm',
        },
        {
            id:3,
            photo:id_1,
            name: 'Kelly',
            surname: 'Vinsent',
            isOnline: true,
            message:'Yes, I am fine',
            time:'1.14 pm',
        },
        {
            id:4,
            photo:id_4,
            name: 'Morgan',
            surname: 'McClean',
            isOnline: false,
            message:'Ok. We will play tennis tommorow, and I am going to take Scandinavian padachky',
            time:'4.55 pm',
        },    
    ];
    
    return(
        <div className="call">
            <CallList calls={calls}/>
        </div>
    )
}

export default Call;

const CallList = (props) =>{
    return(
        <ul className="call__list">
            {props.calls.map(call=>{
                return <CallItem call={call} key={call.id}/>
            })}
        </ul>
    )
}

const CallItem = (props) =>{
    const { call } = props;
    
    return(
        <li className="call__contacts contacts">
            <div className="call__info">
                <div className="contacts__data-icon">
                    <div className="contacts__data-avatar">
                        <img src={call.photo} alt="Avatar" className="contacts__data-avatar_pic"/>
                    </div>
                    {call.isOnline && <div className="contacts__data-online"></div>}      
                </div>
                <div className="contacts__data-info">
                    <div className="contacts__data-person">
                        <div className="contacts__data-name">{call.name}</div>
                        <div className="contacts__data-surname">{call.surname}</div>
                    </div>
                    <div className="contacts__data-time">{call.time}</div>  
                </div>
            </div>
            <div className="contacts__data-call call">
                <Link to={`/call/tel/id_${call.id}`} className="call__button">
                    <img src={phoneIcon} alt="Icon" className="call__icon"/>
                </Link>
                <Link to={`/call/video/id_${call.id}`} className="call__button">
                    <img src={videoIcon} alt="Icon" className="call__icon"/>
                </Link>
            </div>
        </li>
    )
}