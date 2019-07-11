import React from 'react';

import { Route, Link } from 'react-router-dom';

import './TelephoneCall.css';

import id_1 from '../../assets/contacts/1.jpg';
import id_2 from '../../assets/contacts/2.jpg';
import id_3 from '../../assets/contacts/3.jpg';
import id_4 from '../../assets/contacts/4.jpg';

export default class TelephoneCall extends React.Component{
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

        return(
            <div className="telephone-call">
            {calls.map(call=>{
                return <Route
                    exact
                    path={`/call/tel/id_${call.id}`} 
                    render={props=> 
                        <Test 
                            call={call}
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
    const { call,counter } = props;

    return(
        <>
            <div className="telephone-call__avatar">
                <img src={call.photo} alt="Avatar" className="telephone-call__avatar-pic"/>
            </div>
            <div className="telephone-call__info">
                <div className="telephone-call__name">{call.name}</div>
                <div className="telephone-call__surname">{call.surname}</div>
            </div>
            <div className="telephone-call__number">
                {call.telephone}
            </div>
            <div className="telephone-call__counter">
                {`0:${counter}`}
            </div>
            <div className="telephone-call__button">
                <Link to="/call" className="telephone-call__button-down">Завершить звонок</Link>
            </div>
        </>
    )
}


