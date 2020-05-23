import React from 'react';
import {FiLogIn} from 'react-icons/fi'

import './styles.css';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <form>
                    <h1>Informe seu logon:</h1>
                    <input placeholder="Seu id"></input>

                    <h1>Informe sua senha:</h1>
                    <input placeholder="Sua senha"></input>

                    <button className="button" type="submit">
                        <FiLogIn size={14} color="#FFF"/>
                        Entrar
                    </button>
                    
                </form>
            </section>
        </div>
    );
}