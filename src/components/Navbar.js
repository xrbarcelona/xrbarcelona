import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../img/logo-xr-full.png'
import NavbarLanguages from './NavbarLanguages';

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
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item main-menu" to={`/${languageKey}/about`}>
                About
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
            </div>
            <div className="navbar-end has-text-centered">
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
