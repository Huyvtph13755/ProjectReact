import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from './localStorage';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    if(localStorage.getItem('user')){
        const { user } = isAuthenticate();
        if(!user?.role){
            return <Navigate to="/" />
        }
        return props.children
    }else{
        return <Navigate to="/" />
    }
}

export default PrivateRouter