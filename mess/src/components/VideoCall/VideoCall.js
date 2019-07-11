import React from 'react';

import { Route, Link } from 'react-router-dom';

import './VideoCall.css';

import id_1 from '../../assets/contacts/1.jpg';
import id_2 from '../../assets/contacts/2.jpg';
import id_3 from '../../assets/contacts/3.jpg';
import id_4 from '../../assets/contacts/4.jpg';

export default class VideoCall extends React.Component{
    
    state = {
        callTime : 0,
    };

    componentDidMount(){
        this.timer = setInterval(this.handleChangeValue,1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    handleChangeValue = () =>{
        this.setState({
            callTime : this.state.callTime + 1,
        })
    }

    render(){
        let calls = [
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
    
        let profile={
            name:'Nick',
            surname:'Momotenko',
            avatar: id_3 ,
            description:'Какая то невероятно интересная информация о пользователе..',
            country:'Ukraine',
            email:'nickmomotenkoforweb@gmail.com',
            telephone:'+38064166548656',
        }

        return(
            <div className="video-call">
            {calls.map(call=>{
                return <Route
                    exact
                    path={`/call/video/id_${call.id}`} 
                    render={props=> 
                        <Test 
                            call={call}
                            profile={profile}
                            counter={this.state.callTime}
                        />} 
                    key={call.id} 
                />
            })}  
            </div>
        )
    } 
}

const Test = (props) =>{
    const { call,profile,counter } = props;

    return(
        <>
            <div className="video-call__avatars">
                <div className="video-call__avatar video-call__avatar--me">
                    <img src={profile.avatar} alt="Avatar" className="telephone-call__avatar-pic"/>
                </div>
                <div className="video-call__avatar video-call__avatar--friend">
                    <img src={call.photo} alt="Avatar" className="telephone-call__avatar-pic"/>
                </div>
            </div>
            <div className="video-call__number">
                {call.telephone}
            </div>
            <div className="video-call__counter">
                {`0:${counter}`}
            </div>
            <div className="video-call__button">
                <Link to="/call" className="video-call__button-down">Завершить видео</Link>
            </div>
        </>
    )
}


