import React from "react";
import { Navigate } from "react-router-dom";


function RedirectPage(){

    const params = new URLSearchParams(window.location.hash.substring(1));

    const accessToken = params.get('access_token');

    localStorage.setItem('accessToken', accessToken);
    return <Navigate to="/home" />;


}

export default RedirectPage;