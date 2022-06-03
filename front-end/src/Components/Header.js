import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'


const Header = ({onClick}) => {
     return (
         <div className='header'>
         <div className="header-container">
         <h2 className="logo">Where in the world?</h2>
         <div className="switch-Mode   onClick={onClick}">
         <FontAwesomeIcon icon={faMoon}  />

<h3>Dark Mode</h3>
         </div>
        
         </div>
       
         </div>
     )
}
 export default Header;