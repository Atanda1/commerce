import React from 'react';
import {Link} from 'react-router-dom';
import { auth} from "../../firebase/firebase.utils"
import './header.styles.scss';
import { ReactComponent as Logo} from '../../assests/crown.svg';

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to='/'>
          <Logo className="Logo"/>
        </Link>
      <div>
          <Link className="option" to="/shop">
            SHOP
          </Link>
          
          <Link className="option" to="/contact">
            CONTACT
          </Link>
            {currentUser  ?
            (<div className="option" onClick= {() => auth.signOut()}>SIGN OUT</div>) :
            (<Link className="option" to="/signinup">SIGN IN </Link>)
            }
        
      </div>
    </div>
)

export default Header;