import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const AboutCompany = () => {

        const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credencials: "include"
            });

            const data = await res.json();
            console.log(data);

            if (!res.status == 200) {
                const errors = new Error(res.error);
                throw errors;
            }
        } catch (err) {
            console.log(err);
            navigate('/login');
        }
    }
    useEffect(() => {
        callAboutPage();
    }, []);
    return (
        <div>
            <div className='container'>
                <form method='GET'>
                   <div className='row'>
                    <div className='col-lg-6'><h5>{userData.name}</h5></div>
                    <div className='col-lg-6'><h5>{userData.email}</h5></div>
                    <div className='col-lg-6'><h5>{userData.phone}</h5></div>
                   </div>

                </form>
            </div>

        </div>
    )
    }


export default AboutCompany
