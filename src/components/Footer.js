import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import intl from '../intl/locales'
import logo from '../img/logo-white-xr.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import github from '../img/social/github.svg'
import mail from '../img/social/mail.svg'
import telegram from '../img/social/telegram.svg'
import youtube from '../img/social/youtube.svg'

const Footer = class extends React.Component {
  render() {
    const languageKey = this.props.languageKey

    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-3">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to={`/${languageKey}/`}  className="navbar-item">
                         {intl[languageKey].navBar.home}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={`/${languageKey}/october-seventh`}>
                        {intl[languageKey].navBar.oct7}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={`/${languageKey}/events`}>
                        {intl[languageKey].navBar.events}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={`/${languageKey}/blog`}>
                        {intl[languageKey].navBar.blog}
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to={`/${languageKey}/about`}>
                        {intl[languageKey].navBar.about}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={`/${languageKey}/contact`}>
                        {intl[languageKey].navBar.contact}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={`/${languageKey}/press`}>
                        {intl[languageKey].navBar.press}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={`/${languageKey}/donation`}>
                        {intl[languageKey].navBar.donate}
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-6 social">
                <OutboundLink title="Telegram" href="https://t.me/XRBarcelona">
                  <img src={telegram} alt="Telegram" />
                </OutboundLink>
                <OutboundLink title="Facebook" href="https://www.facebook.com/ExtinctionRebellionBarcelona/">
                  <img src={facebook} alt="Facebook" />
                </OutboundLink>
                <OutboundLink title="Twitter" href="https://twitter.com/XRBarcelona">
                  <img src={twitter} alt="Twitter" />
                </OutboundLink>
                <OutboundLink title="Instagram" href="https://www.instagram.com/xrbarcelona/">
                  <img src={instagram} alt="Instagram" />
                </OutboundLink>
                <OutboundLink title="YouTube" href="https://www.youtube.com/channel/UCBnq8mEEDZ4Cs1-exn_HPFg">
                  <img src={youtube} alt="YouTube" />
                </OutboundLink>
                <OutboundLink title="Github" href="https://github.com/xrbarcelona/">
                  <img src={github} alt="Github" />
                </OutboundLink>
                <OutboundLink title="e-mail" href="mailto:xrbarcelona@riseup.net">
                  <img src={mail} alt="e-mail" />
                </OutboundLink>
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
