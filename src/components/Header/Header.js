import React from 'react';
import  './Header.css';
import {Link} from 'react-router-dom';
export default function Header(){
    return(
        <div className='header-container'>
            <div id='header'>Beans Love Beers</div>
            <div className='navigator'>
                <div id='home'><Link to='/'>Home</Link></div>
                <div id='favourite'><Link to='favourite'>Favourite</Link></div>
            </div>
        </div>
    );
}