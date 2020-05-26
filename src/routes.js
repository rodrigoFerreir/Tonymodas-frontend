import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import RegistroCliente from './pages/RegistroCliente';
import RegistroProduto from './pages/RegistroProduto';
import NovaVenda from './pages/NovaVenda';
import Relatorios from './pages/Relatorios';
import Home from './pages/Home';
import Estoque from './pages/ListarProdutos';
import Clientes from './pages/ListarClientes';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/home" component={Home}/>
                <Route path="/cadastrarcliente" component={RegistroCliente}/>
                <Route path="/cadastrarproduto" component={RegistroProduto}/>
                <Route path="/novavenda" component={NovaVenda}/>
                <Route path="/relatorios" component={Relatorios}/>
                <Route path="/estoque" component={Estoque}/>
                <Route path="/clientes" component={Clientes}/>
            </Switch>
        </BrowserRouter>
    )
}