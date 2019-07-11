import React from 'react';

import { Route ,Link } from 'react-router-dom';

import './Chat.css';

import id_1 from '../../assets/contacts/1.jpg';
import id_2 from '../../assets/contacts/2.jpg';
import id_3 from '../../assets/contacts/3.jpg';
import id_4 from '../../assets/contacts/4.jpg';

import arrow from '../../assets/icon/arrow.png';
import phoneIcon from '../../assets/call/phone.png';

import clip from '../../assets/icon/clip.png';
import send_email from '../../assets/icon/send-email.png';

export default class Chat extends React.Component{
    state = {
        messages:[],
        messageInput:'',
    };

    handleInputChange = (e) =>{
        this.setState({
            messageInput : e.target.value,
        })
    }

    handleInputSubmit = (e) =>{
        e.preventDefault();

        if(e.key ==='Enter'){
            this.setState(({ messages, messageInput }) => ({
                messages: [...messages, { text: messageInput }],
                messageInput: ''
            }));
        }else{
            this.setState(({ messages, messageInput }) => ({
                messages: [...messages, { text: messageInput }],
                messageInput: ''
            }));
        }
        
        
    }
    
    render(){
        let chats = [
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
            <div className="chat">
                {chats.map(chat=>{
                    return <Route 
                        exact 
                        path={`/chat/id_${chat.id}`} 
                        render={props=> 
                            <Test 
                                chat={chat}
                                message={this.state.messageInput}
                                handleInputSubmit = {this.handleInputSubmit}
                                handleInputChange={this.handleInputChange}
                                messages={this.state.messages}
                        />} 
                        key={chat.id} 
                    />
                })}
                
            </div>
        )
    }
    
}

const Test = (props) =>{
    const { chat,message,handleInputSubmit,handleInputChange,messages } = props;

    return(
        <>
            <div className="chat__label">
                <div className="chat__prev">
                    <Link to="/" className="chat__prev-button">
                        <img src={arrow} alt="Icon" className="chat__prev-button_icon"/>
                    </Link>
                </div>
                <div className="chat__avatar">
                    <img src={chat.photo} alt="Avatar" className="chat__avatar-icon"/>
                </div>
                <div className="chat__personal">
                    <div className="chat__personal-name">{chat.name}</div>
                    <div className="chat__personal-surname">{chat.surname}</div>
                </div>
                <div className="chat__call call">
                    <button className="call__button">
                        <img src={phoneIcon} alt="Icon" className="call__icon"/>
                    </button>
                </div>
            </div>
            <div className="chat__texting">
                <div className="chat__messages">
                    {chat.message}
                </div>
                <div className="chat__messages-my">
                    {messages.map((item,index)=>{
                        return <MyMessages text={item.text} key={`${index}`} />
                    })}
                </div>
            </div>
            <form className="chat__lowbar">
                <input type="text" className="chat__input" placeholder="Сообщение" value={message} onChange={handleInputChange}/>
                <div className="chat__buttons">
                    {message.length < 2
                        &&
                            <button className="chat__button">
                                <img src={clip} alt="Icon" className="chat__button-attach"/>
                            </button>
                    }
                    <button className="chat__button" onClick={handleInputSubmit}>
                        <img src={send_email} alt="Icon" className="chat__button-send"/>
                    </button>
                </div>
            </form>
        </>
    )
}

const MyMessages = ({text}) =>{
    return(
        <div className="chat__messages-my_row">
            {text}
        </div>
    )
}