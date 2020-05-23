import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import {Link} from 'react-router-dom'

import './styles.css';

export default function Relatorios(){
    return (
        <div className="relatorio-container">
            <section>
                <h1 className="title">Relatorios</h1>
                <Link className="back-link" to="/home">
                    <FiArrowLeft size={20} color="#E02041"/>
                    Home
                </Link>
            </section>
        </div>
    );
}