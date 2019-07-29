import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'


const ContactThanksPage = ({ data }) => {
  const markdown = data.markdownRemark

  return (
    <Layout languageKey={markdown.frontmatter.languageKey}>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>{markdown.frontmatter.title}</h1>
            <HTMLContent content={markdown.html} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

ContactThanksPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        languageKey: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }),
}

export default ContactThanksPage

export const pageQuery = graphql`
  query ContactThanksPage($languageKey: String!) {
    markdownRemark(frontmatter: { 
          templateKey: { eq: "contact-thanks-page" }
          languageKey: { eq: $languageKey }
        }) {
      id
      html
      frontmatter {
        title
        languageKey
      }
    }
  }
`