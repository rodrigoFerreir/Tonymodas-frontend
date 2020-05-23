import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom'
import {FiPower, FiRepeat} from 'react-icons/fi'

export default function Home(){
    return(
        <div className="home-container">
            <header>
                <h1 className="title">Home</h1>
                <Link className="button" to="/cadastrarcliente">Cadastrar Cliente</Link>
                <Link className="button" to="/cadastrarproduto">Cadastrar Produto</Link>
                <Link className="button" to="/novavenda">Realizar Venda</Link>
                <Link className="button" to="/relatorios">Relatorios</Link>
                <button type="button">
                    <FiPower size={20} color="#E02041"/>
                </button>
            </header>

            <ul>
                <li>
                    <strong>Numero de vendas hoje:</strong>
                    <p>8</p>

                    <strong>Numero de vendas ontem:</strong>
                    <p>12</p>

                    <strong>Valor recebido:</strong>
                    <p>R$ 150,00</p>
                    <button>
                        <FiRepeat size={30} color="#E02041"/>
                    </button>
                </li>
            </ul>

        </div>
    );

}