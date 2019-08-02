import React from 'react';
import {Redirect, Route} from "react-router-dom";
import AuthService from '../../services/auth'

function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={props =>
                AuthService.getCurrentUser() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
