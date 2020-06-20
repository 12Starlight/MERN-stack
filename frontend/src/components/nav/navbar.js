import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJediOrder, faLinkedin, faGithub, faTwitter, faAngellist } from '@fortawesome/free-brands-svg-icons'
import { faFeatherAlt, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
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
        <div className='links-loggedIn-wrapper'>
          <div className='links-loggedIn-outer'>
            <Link className='links-loggedIn' to={'/notes'} ><button className='links-loggedIn-inner'>All Notes</button></Link>
            <Link className='links-loggedIn' to={'/profile'} ><button className='links-loggedIn-inner'>Profile</button></Link>
            <Link className='links-loggedIn' to={'/new_note'} ><button className='links-loggedIn-inner'>Create A Note</button></Link>
            <button className='links-loggedIn-button' onClick={this.logoutUser} >Logout</button>
          </div>
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
      <div className='nav-outer vertical-line'>
        <div className='nav-title'><div className='nav-title-inner'>Starlight Insights</div><FontAwesomeIcon className='nav-title-inner-icon' icon={faFeatherAlt} /></div>
        <div class="navLinks-wrapper">
          <ul class="navLinks-container">
            <li className='outer-links'><a className='inner-links' href="https://www.linkedin.com/in/davegagnat/"><FontAwesomeIcon class="linkedIn" icon={faLinkedin} /></a></li>
            <li className='outer-links'><a className='inner-links' href="https://github.com/12Starlight"><FontAwesomeIcon class="github" icon={faGithub} /></a></li>
            <li className='outer-links'><a className='inner-links' href="https://twitter.com/hashtag/TheCodeEffect?src=hash"><FontAwesomeIcon class="twitter" icon={faTwitter} /></a></li>
            <li className='outer-links'><a className='inner-links' href="https://angel.co/u/dave-gagnat"><FontAwesomeIcon class="angel" icon={faAngellist} /></a></li>
            <li className='outer-links'><a className='inner-links' href="https://www.davegagnat.com"><FontAwesomeIcon class="globe" icon={faGlobeAmericas} /></a></li>
          </ul>
        </div>
        <div>
          {this.getLinks()}
        </div>
      </div>
    );
  }
}


export default NavBar; 