import React from 'react';
import UserEdit from '../user-edit/UserEdit';
import Header from '../header/Header';
import UserList from '../user-list/UserList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styles from './App.module.css'
import UserDetails from "../user-details/UserDetails";

function App() {


    return (
        <Router>
            <div className={styles.app}>
                <Header/>
                <main>
                    <Switch>
                        <Route exact path={['/', '/users']} component={UserList}/>
                        <Route exact path='/user/new' component={UserEdit}/>
                        <Route exact path='/user/:id/details' component={UserDetails}/>
                        <Route exact path='/user/:id' component={UserEdit}/>
                        <Route exact render={() => <h1 style={{textAlign: 'center'}}>4 0 4</h1>}/>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;