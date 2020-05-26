import React from 'react';
import { Link } from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import './styles.css';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <h1 className="title">Login</h1>
                <form>
                    <h1>Informe seu logon:</h1>
                    <input placeholder="Seu id"></input>

                    <h1>Informe sua senha:</h1>
                    <input placeholder="Sua senha"></input>

                    <Link className="button" type="submit" to='/home'>
                        <FiLogIn size={14} color="#FFF"/>
                        Entrar
                    </Link>
                    
                </form>
            </section>
        </div>
    );
}