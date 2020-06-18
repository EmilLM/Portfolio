import React from 'react';
import Logo from '../Logo'


export default function Footer() {

    const year = new Date().getFullYear()
    return (
        <footer>
            <Logo/>
            <div className="date"> 
                <p>Copyright &copy;</p>
                <span>{year}</span>
            </div>
    
        </footer>
    )
}