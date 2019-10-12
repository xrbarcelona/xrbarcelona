import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { withPrefix } from "gatsby"
import intl from "../intl/locales"
import browserLang from "browser-lang"


export const LanguageLandingPage = () => (
  <>
    <section className="section">
      <div className="columns is-multiline">
        {intl.locales.map(locale => (
          <div key={`${locale}-landing`} className="column is-4 has-text-centered">
            <h3 className="has-text-weight-semibold is-size-4">
              {intl[locale].languageChoice}
            </h3>
            <Link className="button is-size-4" to={`/${locale}/`}>
              {intl[locale].languageName} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  </>
)

LanguageLandingPage.propTypes = {
  languageKey: PropTypes.string,
}

class IndexRedirect extends React.Component {
  render() {
    const { pathname, search } = this.props.location

    if (typeof window !== "undefined") {
      let detectedLanguage = 
        browserLang({
          languages: intl.locales,
          fallback: intl.defaultLocale,
        })

      if (!intl.locales.includes(detectedLanguage)) {
        detectedLanguage = intl.defaultLocale
      }

      const queryParams = search || ""
      const newUrl = withPrefix(`/${detectedLanguage}${pathname}${queryParams}`)
      // window.location.replace(newUrl)
    }
    
    return (
      <Layout languageKey="ca" baseColorClass="bg-xr-pink">
        <LanguageLandingPage />
      </Layout>
    )
  }
}

export default IndexRedirect
