import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import {Link} from 'react-router-dom'

import './styles.css';

export default function NovaVenda(){
    return (
        <div className="intencaovenda-container">
            <section>
                <h1 className="title"> Intenção de venda</h1>
                    <Link className="back-link" to="/home">
                        <FiArrowLeft size={20} color="#E02041"/>
                        Home
                    </Link>
            </section>

            <form className="dados-venda">
                <h2>Dados do Cliente:</h2>
                <input placeholder="CPF"/>

                <h2>Lista de Produtos:</h2>
                <input placeholder="ID produtos"/>
            </form>

            <div className="produto-checklist" typeof="">
                <ul>
                    <li>
                        <strong>Nome do produto</strong>
                        <p>Camisa Polo</p>

                        <strong>Quantidade</strong>
                        <p>01</p>

                        <strong>Valor</strong>
                        <p>R$ 120,00</p>
                    </li>
                    <li>
                        <strong>Nome do produto</strong>
                        <p>Camisa Polo</p>

                        <strong>Quantidade</strong>
                        <p>01</p>

                        <strong>Valor</strong>
                        <p>R$ 120,00</p>
                    </li>
                    <li>
                        <strong>Nome do produto</strong>
                        <p>Camisa Polo</p>

                        <strong>Quantidade</strong>
                        <p>01</p>

                        <strong>Valor</strong>
                        <p>R$ 120,00</p>
                    </li>
                </ul>
            </div>

        </div>
    );
}