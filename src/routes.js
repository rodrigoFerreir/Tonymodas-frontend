import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import RegistroCliente from './pages/RegistroCliente';
//import RegistroProduto from './pages/RegistroProduto'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/cadastrarcliente" component={RegistroCliente}/>
            </Switch>
        </BrowserRouter>
    )
}