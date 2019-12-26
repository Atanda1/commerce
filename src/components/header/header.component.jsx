import React from 'react';
import CartIcon from "../cart-icon/cart-icon.component"
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
import { auth} from "../../firebase/firebase.utils"
import './header.styles.scss';
import { ReactComponent as Logo} from '../../assests/crown.svg';
import CartDropdown from "../cart-dropdown/cart-dropdown.component"



const Header = ({currentUser, hidden}) => (
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
            <CartIcon />
      </div>
 
     { hidden ? null : <CartDropdown />
}     
    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);