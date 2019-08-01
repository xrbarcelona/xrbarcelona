import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import logo from '../img/logo-white-xr.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import github from '../img/social/github.svg'
import mail from '../img/social/mail.svg'

const Footer = class extends React.Component {
  render() {
    const languageKey = this.props.languageKey

    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to={`/${languageKey}/`}  className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={`/${languageKey}/about`}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={`/${languageKey}/events`}>
                        Events
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to={`/${languageKey}/blog`}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={`/${languageKey}/contact`}>
                        Contact
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/ExtinctionRebellionBarcelona/">
                  <img
                    src={facebook}
                    alt="Facebook"
                  />
                </a>
                <a title="twitter" href="https://twitter.com/XRBarcelona">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/xrbarcelona/">
                  <img
                    src={instagram}
                    alt="Instagram"
                  />
                </a>
                <a title="github" href="https://github.com/xrbarcelona/">
                  <img
                    src={github}
                    alt="Github"
                  />
                </a>
                <a title="email" href="mailto:xrbarcelona@riseup.net">
                  <img
                    src={mail}
                    alt="Email"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="content has-text-centered">
          <img
            className="footer-logo"
            src={logo}
            alt="Extintion Rebellion Logo"
          />
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  languageKey: PropTypes.string,
}

export default Footer
