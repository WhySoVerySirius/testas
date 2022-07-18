import React from "react";
import {Link} from 'react-router-dom';
import portal from '../img/portal.jpg'

export default function Home()
{
    return (
        <div className="home-container">
            <img src={portal} alt="" className="banner-img"/>
            <Link to='/list' className="home-center-link">NEXT >>></Link>
        </div>
    )
}