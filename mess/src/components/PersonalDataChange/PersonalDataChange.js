import React from 'react';

import './PersonalDataChange.css';

const PersonalDataChange = (props) =>{
    const { profile } = props;

    return(
        <div className="profile__change">
            <div className="profile__personal">
                <div className="profile__block">
                    <div className="profile__label">Имя и фамилия</div>
                    <div className="profile__personal-info">
                        <input type="text" className="profile__input" value={`${profile.name} ${profile.surname}`}/>
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
        </div>
    )
}

export default PersonalDataChange;