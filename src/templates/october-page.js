import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const OctoberPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-6">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} align="center"/>
              </div>
            </div>
            <div className="column is-6">
              <div className="section">
                <img alt="Flyer" src="/img/october.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

OctoberPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const OctoberPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout languageKey={post.frontmatter.languageKey}>
      <OctoberPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

OctoberPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default OctoberPage

export const octoberPageQuery = graphql`
  query OctoberPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        languageKey
        title
      }
    }
  }
`
