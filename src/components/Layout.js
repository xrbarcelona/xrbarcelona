import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import intl from '../intl/locales'

const defaultHeadMetaData = (languageKey) => {
  return {
    defaultPageTitle: intl[languageKey].defaultPageTitle,
    defaultMetaDescription: intl[languageKey].defaultMetaDescription
  }
}

const Layout = ({ languageKey, baseColorClass, 
                  title, description, featuredImage, 
                  children }) => {
  const { defaultPageTitle, defaultMetaDescription } = defaultHeadMetaData(languageKey)

  const currentTitle = (title) ? `${title} | ${defaultPageTitle}` : defaultPageTitle
  const currentDescription = (description) ? description : defaultMetaDescription
  const currentFeaturedImage = (featuredImage) ? 
      featuredImage.childImageSharp.resize.src : "/img/og-image.jpg"

  return (
    <div className={baseColorClass}>
      <Helmet>
        <html lang={languageKey} />
        <title>{currentTitle}</title>
        <meta name="description" content={currentDescription} />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
        <link rel="mask-icon" href="/img/logo-xr.svg" color="#ff4400" />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={currentTitle} />
        <meta property="og:image" content={currentFeaturedImage} />
        <meta property="og:description" content={currentDescription} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@XRBarcelona" />
        <meta name="twitter:title" content={currentTitle} />
        <meta name="twitter:image" content={currentFeaturedImage} />
        <meta name="twitter:description" content={currentDescription} />

        <link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,700&display=swap" rel="stylesheet" /> 
        
      </Helmet>
      <Navbar languageKey={languageKey} />
      <div>{children}</div>
      <Footer languageKey={languageKey} />
    </div>
  )
}


Layout.propTypes = {
  languageKey: PropTypes.string,
  baseColorClass: PropTypes.string,
}


export default Layout
