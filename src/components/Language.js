import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  ca: "Català",
  es: "Español",
  en: "English",
}

const Language = () => {
  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map(language => (
          <button
            key={language}
            onClick={() => changeLocale(language)}
            className={ currentLocale === language ? 
              'navbar-item language-link language-selected' :
              'navbar-item language-link' }
          >
            {languageName[language]}
          </button>
        ))
      }
    </IntlContextConsumer>
  )
}

export default Language
