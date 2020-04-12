import React from 'react';

import logo_facebook from '../assets/logo-facebook.png'

import UserIcon from '@material-ui/icons/AccountCircle'

function Header () {
  return(

    <header>

      <nav>
        <a href="#">
          <img src={logo_facebook} alt="Facebook"/>
        </a>

        <a id="perfil-user" href="#">
          <span>Meu perfil</span>
          <UserIcon/>
        </a>
      </nav>

    </header>
    
  )
}

export default Header