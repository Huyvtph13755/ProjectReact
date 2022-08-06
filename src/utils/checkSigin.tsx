import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from './localStorage';

type PrivateRouterProps = {
    children: JSX.Element
}

const CheckSignin = (props: PrivateRouterProps) => {
    if(localStorage.getItem('user')){
            return <Navigate to="/" />
    }
    return props.children
}

export default CheckSignin