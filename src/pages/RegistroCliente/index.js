import React, { useState } from 'react';

import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';
import api from '../../services/api';

export default function RegistroCliente(){
    const [ nome, setNome ] = useState('')
    const [ cpf , setCpf] = useState('')
    const [ referencia, setReferencia ] = useState('')
    const [ telefone, setTelefone ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ logradouro, setLogradouro ] = useState('')
    const [ numero, setNumero ] = useState('')
    const [ bairro, setBairro ] = useState('')
    const [ complemento, setComplemento ] = useState('')
    const [ cidade, setCidade ] = useState('')
    const [ cep, setCep ] = useState('')

    async function cadastrarCliente(evt){
        evt.preventDefault();

        const data = {
            nome, 
            cpf,
            referencia,
            telefone,
            email,
            logradouro,
            numero,
            bairro,
            complemento,
            cidade,
            cep,
        }

        const response = await api.post('clientes', data);
        alert(`${response.data.message}`)

    }

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
                 <form onSubmit={cadastrarCliente}>
                     <h2>Dados do Cliente:</h2>
                    <input 
                        placeholder="Nome" 
                        value={nome} 
                        onChange={e => setNome(e.target.value)}
                    />
                    <input 
                        placeholder="CPF" 
                        value={cpf} 
                        onChange={e => setCpf(e.target.value)}
                    />
                    <input
                        placeholder="Referencia"
                        value={referencia} 
                        onChange={e => setReferencia(e.target.value)}
                    />

                    <div className="contact-group">
                        <h2>Contato:</h2>
                        <input 
                            placeholder="Telefone"
                            value={telefone} 
                            onChange={e => setTelefone(e.target.value)}
                        />
                        <input  
                            type="email" 
                            placeholder="E-mail"                        
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="adresses-group">
                        <h2>Endereço:</h2>
                        <input 
                            placeholder="Logradouro"
                            value={logradouro} 
                            onChange={e => setLogradouro(e.target.value)}
                        />
                        <input 
                            placeholder="Numero" 
                            value={numero} 
                            onChange={e => setNumero(e.target.value)}
                        />
                        <input 
                            placeholder="Bairro" 
                            value={bairro} 
                            onChange={e => setBairro(e.target.value)}
                        />
                        <input 
                            placeholder="Complemento"
                            value={complemento} 
                            onChange={e => setComplemento(e.target.value)}
                        />
                    </div>
                    <div className="city-group">
                        <h2>Cidade:</h2>
                        <input 
                            placeholder="Nome da Cidade" 
                            value={cidade} 
                            onChange={e => setCidade(e.target.value)}
                        />
                        <input 
                            placeholder="CEP" 
                            value={cep} 
                            onChange={e => setCep(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                 </form>
             </div>

        </div>
    )
}