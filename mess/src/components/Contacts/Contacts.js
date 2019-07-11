import React from 'react';

import { Link } from 'react-router-dom';

import './Contacts.css';

import id_1 from '../../assets/contacts/1.jpg';
import id_2 from '../../assets/contacts/2.jpg';
import id_3 from '../../assets/contacts/3.jpg';
import id_4 from '../../assets/contacts/4.jpg';

const Contacts = () =>{
    let contacts = [
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
        <div className="contacts">
            <ContactsList contacts={contacts} />
        </div>
    )
}

export default Contacts;

const ContactsList = (props) =>{
    return(
        <ul className="contacts__list">
            {props.contacts.map(contact=>{
                return <ContactsItem contact={contact} key={contact.id} />
            })}
        </ul>
    )
}

const ContactsItem = (props) =>{
    const { contact } = props;

    return(
        <li className="contacts__item">
            <Link to={`/chat/id_${contact.id}`} className="contacts__link">
                <div className="contacts__data">
                    <div className="contacts__data-icon">
                        <div className="contacts__data-avatar">
                            <img src={contact.photo} alt="Avatar" className="contacts__data-avatar_pic"/>
                        </div>
                        {contact.isOnline && <div className="contacts__data-online"></div>}      
                    </div>
                    <div className="contacts__data-info">
                        <div className="contacts__data-person">
                            <div className="contacts__data-name">{contact.name}</div>
                            <div className="contacts__data-surname">{contact.surname}</div>
                        </div>
                        <div className="contacts__data-message">{contact.message}</div>
                    </div>
                </div>
                <div className="contacts__data-time">{contact.time}</div>
            </Link>          
        </li>
    )
}