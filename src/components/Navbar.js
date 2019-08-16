import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../img/logo-xr-full.png'
import NavbarLanguages from './NavbarLanguages';
import facebook from "../img/social/facebook_black.svg";
import twitter from "../img/social/twitter_black.svg";
import instagram from "../img/social/instagram_black.svg";
import mail from "../img/social/mail_black.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    const languageKey = this.props.languageKey

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to={`/${languageKey}/`} className="navbar-item" title="Homepage">
              <img src={logo} alt="Extintion Rebellion Logo" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item main-menu" to={`/${languageKey}/about`}>
                About
              </Link>
              <Link className="navbar-item main-menu" to={`/${languageKey}/october-seventh`}>
                7Oct
              </Link>
              <Link className="navbar-item main-menu" to={`/${languageKey}/events`}>
                Events
              </Link>
              <Link className="navbar-item main-menu" to={`/${languageKey}/blog`}>
                Blog
              </Link>
              <Link className="navbar-item main-menu" to={`/${languageKey}/contact`}>
                Contact
              </Link>
              <Link className="navbar-item main-menu" to={`/${languageKey}/donation`}>
                Donate
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <div className="navbar-item">
                <a title="facebook" href="https://www.facebook.com/ExtinctionRebellionBarcelona/">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a title="twitter" href="https://twitter.com/XRBarcelona">
                  <img className="fas fa-lg" src={twitter} alt="Twitter" />
                </a>
                <a title="instagram" href="https://www.instagram.com/xrbarcelona/">
                  <img src={instagram} alt="Instagram" />
                </a>
                <a title="email" href="mailto:xrbarcelona@riseup.net">
                  <img src={mail} alt="Email" />
                </a>
              </div>
              <NavbarLanguages languageKey={languageKey} />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  languageKey: PropTypes.string,
}

export default Navbar
