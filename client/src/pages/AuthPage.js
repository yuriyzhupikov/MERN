import React from "react";

export const AuthPage = () => {
    return (
        <div className="row">
            <div className="col s6 offset-s3">

                <h1>Название проекта</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Вход</span>
                        <div>

                            <div className="input-field">
                                <input placeholder="Введите email" id="email" type="text"/>
                                <label htmlFor="email" name="email" className="yellow-input">Емайл</label>
                            </div>
                            <div className="input-field">
                                <input placeholder="Введите пароль" id="password" type="password"/>
                                <label htmlFor="password" name="password" className="yellow-input">Пароль</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4" style={{marginRight: 10}}>Войти</button>
                        <button className="btn grey lighten-1 black-text">Регистрация</button>
                    </div>
                </div>

            </div>
        </div>
    );
}