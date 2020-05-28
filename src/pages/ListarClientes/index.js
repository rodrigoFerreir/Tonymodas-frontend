import React from 'react';
import { FiArrowLeft, FiTrash2, FiShoppingCart } from 'react-icons/fi';
import {Link} from 'react-router-dom'
// import Axios from 'axios';

import './styles.css';

export default function ListarClientes(props){
    // async function listProdutos(){
    //     const produtos = await Axios.get('/produtos')
    //     return produtos;
    // }
    return(
        <div className="clientes-container">
            <header>
                <h1 className='title'>Clientes</h1>
                <Link className="back-link" to="/home">
                    <FiArrowLeft size={20} color="#E02041"/>
                        Home
                </Link>
            </header>
            <ul>
                <li>
                    <strong>Nome:</strong>
                    <p>Nome do Cliente</p>

                    <strong>Referencia:</strong>
                    <p>Referencia do Cliente</p>

                    <strong>Endereço:</strong>
                    <p>Rua das Flores, 06</p>

                    <strong>Cidade:</strong>
                    <p>Vitória</p>
                    <button className="button-delete">
                        <FiTrash2 size={40} color="#a8a8b3"/>
                    </button>
                    <button className="button-sell">
                        <FiShoppingCart size={40} color="#E02041"/>
                    </button>
                </li>
            </ul>

            <ul>
                <li>
                    <strong>Nome:</strong>
                    <p>Nome do Cliente</p>

                    <strong>Referencia:</strong>
                    <p>Referencia do Cliente</p>

                    <strong>Endereço:</strong>
                    <p>Rua das Flores, 06</p>

                    <strong>Cidade:</strong>
                    <p>Vitória</p>
                    <button className="button-delete">
                        <FiTrash2 size={40} color="#a8a8b3"/>
                    </button>
                    <button className="button-sell">
                        <FiShoppingCart size={40} color="#E02041"/>
                    </button>
                </li>
            </ul>

            <ul>
                <li>
                    <strong>Nome:</strong>
                    <p>Nome do Cliente</p>

                    <strong>Referencia:</strong>
                    <p>Referencia do Cliente</p>

                    <strong>Endereço:</strong>
                    <p>Rua das Flores, 06</p>

                    <strong>Cidade:</strong>
                    <p>Vitória</p>
                    <button className="button-delete">
                        <FiTrash2 size={40} color="#a8a8b3"/>
                    </button>
                    <button className="button-sell">
                        <FiShoppingCart size={40} color="#E02041"/>
                    </button>
                </li>
            </ul>
        </div>

    )
}