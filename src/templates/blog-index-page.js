import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import localizedBlogRoll from '../components/LocalizedBlogRoll'

const BlogIndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout languageKey={frontmatter.languageKey}>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/banner-blog.jpg')`,
        }}
      >
        <h1 className="home-title has-text-weight-bold is-size-1">
          {frontmatter.title}
        </h1> 
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
          { localizedBlogRoll(frontmatter.languageKey) }
          </div>
        </div>
      </section>
    </Layout>
  )
}

BlogIndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        languageKey: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }),
}

export default BlogIndexPage

export const pageQuery = graphql`
  query BlogIndexPage($languageKey: String!) {
    markdownRemark(frontmatter: { 
          templateKey: { eq: "blog-index-page" }
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