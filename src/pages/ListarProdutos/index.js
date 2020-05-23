import React from 'react';
import Axios from 'axios';

export default function ListarProdutos(){
    async function listProdutos(props){
        const produtos = await Axios.get('produtos')
    }
    return(
        <div>
            <h1>Lista de Produtos</h1>
            <h2>{{}}</h2>
        </div>

    )
}