import React from 'react';
import { FiArrowLeft, FiTrash2, FiShoppingCart } from 'react-icons/fi';
import {Link} from 'react-router-dom'
// import Axios from 'axios';

import './styles.css';

export default function ListarProdutos(props){
    // async function listProdutos(){
    //     const produtos = await Axios.get('/produtos')
    //     return produtos;
    // }
    return(
        <div className="produtos-container">
            <header>
                <h1 className='title'>Estoque</h1>
                <Link className="back-link" to="/home">
                    <FiArrowLeft size={20} color="#E02041"/>
                        Home
                </Link>
            </header>
            <ul>
                <li>
                    <strong>Nome:</strong>
                    <p>Nome do produto</p>

                    <strong>Categoria:</strong>
                    <p>Nome da categoria</p>

                    <strong>Quantidade:</strong>
                    <p>10</p>

                    <strong>Valor:</strong>
                    <p>R$ 150,00</p>
                    <button className="button-delete">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                    <button className="button-sell">
                        <FiShoppingCart size={40} color="#E02041"/>
                    </button>
                </li>
            </ul>

            <ul>
                <li>
                    <strong>Nome:</strong>
                    <p>Nome do produto</p>

                    <strong>Categoria:</strong>
                    <p>Nome da categoria</p>

                    <strong>Quantidade:</strong>
                    <p>10</p>

                    <strong>Valor:</strong>
                    <p>R$ 150,00</p>
                    <button className="button-delete">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                    <button className="button-sell">
                        <FiShoppingCart size={40} color="#E02041"/>
                    </button>
                </li>
            </ul>

            <ul>
                <li>
                    <strong>Nome:</strong>
                    <p>Nome do produto</p>

                    <strong>Categoria:</strong>
                    <p>Nome da categoria</p>

                    <strong>Quantidade:</strong>
                    <p>10</p>

                    <strong>Valor:</strong>
                    <p>R$ 150,00</p>
                    <button className="button-delete">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                    <button className="button-sell">
                        <FiShoppingCart size={40} color="#E02041"/>
                    </button>
                </li>
            </ul>
            
        </div>

    )
}