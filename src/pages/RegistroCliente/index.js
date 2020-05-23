import React from 'react';

import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';

export default function RegistroCliente(){
    return (
        <div className="register-container">
             <div className="content">
                 <section>
                    <h1 className="title">Cadastro de Clientes</h1>
                    <Link className="back-link" to="/home">
                        <FiArrowLeft size={20} color="#E02041"/>
                        Home
                    </Link>
                 </section>
                 <form>
                     <h2>Dados do Cliente:</h2>
                    <input placeholder="Nome"/>
                    <input placeholder="CPF"/>
                    <input placeholder="Referencia"/>

                    <div className="contact-group">
                        <h2>Contato:</h2>
                        <input placeholder="Telefone"/>
                        <input  type="email" placeholder="E-mail"/>
                    </div>

                    <div className="adresses-group">
                        <h2>Endereço:</h2>
                        <input placeholder="Logradouro"/>
                        <input placeholder="Numero"/>
                        <input placeholder="Bairro"/>
                        <input placeholder="Complemento"/>
                    </div>
                    <div className="city-group">
                        <h2>Cidade:</h2>
                        <input placeholder="Nome da Cidade"/>
                        <input placeholder="CEP"/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                 </form>
             </div>

        </div>
    )
}