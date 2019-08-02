import React, {useState} from 'react';
import UserEdit from '../user-edit/UserEdit';
import Header from '../header/Header';
import UserList from '../user-list/UserList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styles from './App.module.css'
import UserDetails from "../user-details/UserDetails";
import Login from "../login/Login";
import AuthService from "../../services/auth";
import {configureFakeFetch} from "../../be-mock/fake-fetch";
import PrivateRoute from "../private-route/PrivateRoute";

configureFakeFetch();

function App() {

    const [user, setUser] = useState(AuthService.getCurrentUser());

    return (
        <Router>
            <div className={styles.app}>
                <Header user={user} setUser={setUser}/>
                <main>
                    <Switch>
                        <Route exact path={'/login'}
                               render={routeProps => <Login {...routeProps} user={user} setUser={setUser}/>}/>

                        <PrivateRoute exact path={['/', '/users']} component={UserList}/>
                        <PrivateRoute exact path='/user/new' component={UserEdit}/>
                        <PrivateRoute exact path='/user/:id/details' component={UserDetails}/>
                        <PrivateRoute exact path='/user/:id' component={UserEdit}/>
                        <PrivateRoute exact render={() => <h1 style={{textAlign: 'center'}}>4 0 4</h1>}/>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;