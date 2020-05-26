import React from 'react';
// import Axios from 'axios';

import './styles.css';

export default function ListarProdutos(props){
    // async function listProdutos(){
    //     const produtos = await Axios.get('/produtos')
    //     return produtos;
    // }
    return(
        <div className="produtos-container">
            <h1>Estoque</h1>
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
                </li>
            </ul>
            
        </div>

    )
}