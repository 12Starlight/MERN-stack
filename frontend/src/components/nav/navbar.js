import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJediOrder } from '@fortawesome/free-brands-svg-icons'
import './navbar.css';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div >
          <button><Link className='links-loggedIn' to={'/notes'} >All Notes</Link></button>
          <button><Link className='links-loggedIn' to={'/profile'} >Profile</Link></button>
          <button><Link className='links-loggedIn' to={'/new_note'} >Create A Note</Link></button>
          <button className='links-loggedIn' onClick={this.logoutUser} >Logout</button>
        </div>
      );
    } else {
      return (
        <div className='links-signedOut-wrapper'>
          <div className='links-signedOut-outer' >
            <Link className='links-signedOut' to={'/signup'} ><button className='links-signedOut-inner' >Signup</button></Link>
            <Link className='links-signedOut' to={'/login'} ><button className='links-signedOut-inner' >Login</button></Link>
          </div>
        </div>
      );
    }
  }


  render() {
    return (
      <div className='nav-outer'>
        <div className='nav-title'><div className='nav-title-inner'>Starlight</div><FontAwesomeIcon className='nav-title-inner-icon' icon={faJediOrder} /></div>
        <div>
          {this.getLinks()}
        </div>
      </div>
    );
  }
}


export default NavBar; 