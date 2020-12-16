import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Setting from './pages/setting';
import Header from './components/header';
import User from './pages/user';
import UserDetail from './pages/user-detail';

function App() {
    return (
        <>

            <BrowserRouter>
            
                <Header />

                <Route path="/" component={Home} exact={true} />
                <Route path="/setting" component={Setting} exact={true} />
                <Route path="/user" component={User} exact={true} />
                <Route path="/user/:userId" component={UserDetail} exact={true} />
                
            </BrowserRouter>
        </>
    )
}

export default App;