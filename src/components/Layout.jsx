import React from "react";
import {Link} from 'react-router-dom';

export default function Layout({children, links})
{
    return (
        <div className="container">
            <header>
                <ul>
                {links.map(link=><Link to={link.path} key={link.path}>{link.naming}</Link>)}
                </ul>
            </header>
            <div className="layout-container">
            {children}
            </div>
        </div>
    )
}