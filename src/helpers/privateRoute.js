import React from 'react';
import {Redirect,Route} from 'react-router-dom';

const PrivateRoute=({component:Component,...rest})=>(
    <Route
        {...rest}
        render={props=>
            localStorage.getItem("authToken") ? (
                <Component {...props}/>
            ):(
                <Redirect
                    to={{
                        pathname:"/ingreso",
                        state:{
                            from:props.location,
                            modalVisible:props.modalVisible
                        }
                    }}
                />
            )

        }
    />
)
export default PrivateRoute;