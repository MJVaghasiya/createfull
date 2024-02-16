import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Logout = () => {
const navigate = useNavigate();
    useEffect (() => { 
        fetch('/logout', {
            method:"GET",
            headers:{
                Accept: "applocation/json",
                "Content-Type": "application/json"
            },
            credencial:"include"
        }).then((res) => {
navigate.push('/login', {replace: true});
if(res.status != 200){
    const error = new Error(res.error);
    throw error;
}
        }).catch((err) => {
            console.log(err);
        });
    });
  return (
    <div>
   <h5> This is my logout</h5>
    </div>
  )
}

export default Logout
