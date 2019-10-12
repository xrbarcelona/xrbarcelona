import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

const baseColorClass = "bg-xr-light-green";

export const DonationPageTemplate = ({ title, heading, subheading, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/banner-donation.jpg')`
        }}
      >
        <h1
          className={`home-title ${baseColorClass} has-text-weight-bold is-size-1`}
        >
          {title}
        </h1>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h3 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h3>
                <h3>{subheading}</h3>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

DonationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const DonationPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout
      languageKey={post.frontmatter.languageKey}
      baseColorClass={baseColorClass}
      title={post.frontmatter.title} 
      description={post.frontmatter.description} 
    >
      <DonationPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        content={post.html}
      />
    </Layout>
  );
};

DonationPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default DonationPage;

export const aboutPageQuery = graphql`
  query DonationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        languageKey
        title
        description
        heading
        subheading
      }
     
    }
  }
`;
