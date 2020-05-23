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

        </div>
    );
}