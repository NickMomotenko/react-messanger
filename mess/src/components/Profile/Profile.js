import React from 'react';

import './Profile.css';

import PersonalDataChange from '../PersonalDataChange';

import id_3 from '../../assets/contacts/3.jpg';

export default class Profile extends React.Component{

    state = {
        relevantData : true,
    }

    handleChangeData = () =>{
        this.setState({
            relevantData : false,
        })
    }

    handleCheckData = () =>{
        this.setState({
            relevantData: true,
        })
    }

    render(){
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
            <div className="profile">
                <div className="profile__label">
                    <div className="profile__col">
                        <div className="profile__avatar">
                            <img src={profile.avatar} alt="Icon" className="profile__avatar-icon"/>
                        </div>
                    </div>
                    <div className="profile__col">
                        <div className="profile__nickname">{profile.name} {profile.surname}</div>
                        <button className="profile__button" onClick={this.handleChangeData}>Изменить данные</button>
                    </div>
                </div>
                <div className="profile__personal">
                    <div className="profile__block">
                        <div className="profile__label">Имя и фамилия</div>
                        <div className="profile__personal-info">
                            {
                                this.state.relevantData 
                                    ?
                                        <>
                                            <div className="profile__name">{profile.name}</div>
                                            <div className="profile__surname">{profile.surname}</div>
                                        </>
                                    :
                                        <input className="profile__name" value={`${profile.name} ${profile.surname}`} />
                            }
                        </div>
                    </div>
                    <div className="profile__block">
                        <div className="profile__label">О себе</div>
                        <div className="profile__personal-info">
                            {profile.description}
                        </div>
                    </div>
                    <div className="profile__block">
                        <div className="profile__label">Страна проживания</div>
                        <div className="profile__personal-email">
                            {profile.country}
                        </div>
                    </div>
                    <div className="profile__block">
                        <div className="profile__label">Эл.адрес</div>
                        <div className="profile__personal-email">
                            {profile.email}
                        </div>
                    </div>
                    <div className="profile__block">
                        <div className="profile__label">Номер телефона</div>
                        <div className="profile__personal-email">
                            {profile.telephone}
                        </div>
                    </div>
                </div>
                {/* {
                    this.state.relevantData
                        ?
                            null
                        : 
                            <PersonalDataChange profile={profile} />
                } */}
            </div>
        )
    }
}