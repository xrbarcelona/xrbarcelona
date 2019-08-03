import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import flyerImage from '../img/october.jpg'


export const OctoberPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="container">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h1>
          <div className="columns">
            <div className="column is-6">
              <PageContent className="content" content={content} align="center"/>
            </div>
            <div className="column is-6">
              <div className="flyer">
                <img alt="Flyer" src={flyerImage} />
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
