import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from "gatsby"
import intl from "../intl/locales"
import browserLang from "browser-lang"

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
      window.location.replace(newUrl)
    }
    
    return (
      <Helmet>
          <meta http-equiv="refresh" content={`0;url=${intl.defaultLocale}`} />
      </Helmet>
    )
  }
}

export default IndexRedirect
