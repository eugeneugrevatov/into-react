import React from 'react';
import User from '../user/User';
import Header from '../header/Header';
import UserList from '../user-list/UserList';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import styles from './App.module.css'

function App() {


    return (
        <Router>
            <div className={styles.app}>
                <Header/>
                <main>
                    <Route exact path={['/', '/users']} component={UserList}/>
                    <Route exact path='/user/:id(\d+)' component={User}/>
                    <Route exact path='/user/new' component={User}/>
                </main>
            </div>


        </Router>
    );
}

export default App;