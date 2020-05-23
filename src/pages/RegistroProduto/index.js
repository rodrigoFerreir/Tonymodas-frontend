import React from 'react';

import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';

export default function RegistroCliente(){
    return (
        <div className="register-container">
             <div className="content">
                 <section>
                    <h1 className="title">Cadastro de Produtos</h1>
                    <Link className="back-link" to="/home">
                        <FiArrowLeft size={20} color="#E02041"/>
                        Home
                    </Link>
                 </section>
                 <form>
                     <h2>Dados do Produto:</h2>
                    <input placeholder="Nome"/>
                    <input placeholder="Marca"/>
                    <input placeholder="Tamanho"/>
                    <input placeholder="Quantidade"/>
                    <input placeholder="Observação"/>

                    <div className="valor-group">
                        <h2>Preço:</h2>
                        <input placeholder="Valor de Compra"/>
                        <input placeholder="Valor de Venda"/>
                    </div>

                    <div className="info-estoque-group">
                        <h2>Dados de estoque:</h2>
                        <input placeholder="Referencia do lote"/>
                        <input placeholder="Categoria"/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                 </form>
             </div>

        </div>
    )
}