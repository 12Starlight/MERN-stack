import React from 'react';
import { Link } from 'react-router-dom';
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
          <button><Link to={'/notes'} >All Notes</Link></button>
          <button><Link to={'/profile'} >Profile</Link></button>
          <button><Link to={'/new_note'} >Create A Note</Link></button>
          <button onClick={this.logoutUser} >Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <button><Link to={'/signup'} >Signup</Link></button>
          <button><Link to={'/login'} >Login</Link></button>
        </div>
      );
    }
  }


  render() {
    return (
      <div className='outer'>
        <h1>Starlight</h1>
        <article>
          {this.getLinks()}
        </article>
      </div>
    );
  }
}


export default NavBar; 