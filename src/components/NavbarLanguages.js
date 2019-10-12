import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import intl from '../intl/locales'

export default class NavbarLanguages extends React.Component {
  render() {
    const currentLocale = this.props.languageKey

    return (
      intl.locales.map(locale => (
        <Link
          key={locale}
          to={`/${locale}/`}
          className={ currentLocale === locale ? 
            'navbar-item language language-selected' :
            'navbar-item language' } >
          {intl[locale].languageNavBarName}
        </Link>
      ))
    )
  }
}

NavbarLanguages.propTypes = {
  languageKey: PropTypes.string,
}
