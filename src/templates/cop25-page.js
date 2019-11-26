import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import flyerImage from '../../static/img/blog/2019-01-28-call-for-rebels.jpg'

const baseColorClass='bg-xr-pink'

export const Cop25PageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="container">
          <h1 className={`title ${baseColorClass} is-size-2 has-text-weight-bold is-bold-light`}>
            {title}
          </h1>
          <div className="columns">
            <div className="column is-8">
              <PageContent className="content" content={content} align="center"/>
            </div>
            <div className="column is-4">
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

Cop25PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const Cop25Page = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout 
        languageKey={post.frontmatter.languageKey} 
        baseColorClass={baseColorClass} 
        title={post.frontmatter.title}
        description={post.frontmatter.description} 
        featuredImage={post.frontmatter.featuredimage}
    >
      <Cop25PageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

Cop25Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Cop25Page

export const cop25PageQuery = graphql`
  query Cop25Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        languageKey
        title
        description
        featuredimage {
          childImageSharp {
            resize(width: 400, quality: 70) {
              src
            }
          }
        }
      }
    }
  }
`
