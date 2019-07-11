import React from 'react';

import './Friends.css';

import id_1 from '../../assets/contacts/1.jpg';
import id_2 from '../../assets/contacts/2.jpg';
import id_3 from '../../assets/contacts/3.jpg';
import id_4 from '../../assets/contacts/4.jpg';

const Friends = () =>{
    let friends = [
        {
            id:1,
            photo:id_3,
            name: 'Carlos',
            surname: 'Manicos',
            isOnline: true,
            message:'See you tommorow',
            time:'9.45 pm',
            telephone:'+39042142142',
        },
        {
            id:2,
            photo:id_2,
            name: 'Shamay',
            surname: 'Marshal',
            isOnline: false,
            message:'Ok. We are doing this right now',
            time:'1.14 pm',
            telephone:'+380942142412'
        },
        {
            id:3,
            photo:id_1,
            name: 'Kelly',
            surname: 'Vinsent',
            isOnline: true,
            message:'Yes, I am fine',
            time:'1.14 pm',
            telephone:'+380952522525',
        },
        {
            id:4,
            photo:id_4,
            name: 'Morgan',
            surname: 'McClean',
            isOnline: false,
            message:'Ok. We will play tennis tommorow, and I am going to take Scandinavian padachky',
            time:'4.55 pm',
            telephone:'+380951221215'
        },    
    ];

    return(
        <div className="friends">
            <div className="friends__label">
                <div className="friends__title title">
                    Контакты ({friends.length})
                </div>
                <div className="friends__option">
                    <button href="#" className="friends__option-button">All</button>
                    <button href="#" className="friends__option-button">App</button>
                </div>
            </div>
            <FriendsList friends={friends}/>
        </div>
    )
}
export default Friends;

const FriendsList = (props) =>{
    return(
        <ul className="friends__list">
            {props.friends.map(friend=>{
                return(
                    <FriendsItem friend={friend} key={friend.id} />
                )
            })}
        </ul>
    )
}

const FriendsItem = (props) =>{
    const { friend } = props;

    return(
        <li className="friends__contacts contacts">
            <div className="friends__info">
                <div className="contacts__data-icon">
                    <div className="contacts__data-avatar">
                        <img src={friend.photo} alt="Avatar" className="contacts__data-avatar_pic"/>
                    </div>
                    {friend.isOnline && <div className="contacts__data-online"></div>}      
                </div>
                <div className="contacts__data-info">
                    <div className="contacts__data-person">
                        <div className="contacts__data-name">{friend.name}</div>
                        <div className="contacts__data-surname">{friend.surname}</div>
                    </div>
                    <div className="contacts__data-number">{friend.telephone}</div>
                </div>
            </div>
        </li>
    )
}