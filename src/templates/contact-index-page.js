import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import intl from '../intl/locales'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

const baseColorClass='bg-xr-pink'

class ContactIndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  render() {
    const markdown = this.props.data.markdownRemark
    const languageKey = markdown.frontmatter.languageKey

    return (
      <Layout languageKey={languageKey} baseColorClass={baseColorClass}>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/banner-contact.jpg')`,
          }}
        >
          <h1 className={`home-title ${baseColorClass} has-text-weight-bold is-size-1`}>
            {markdown.frontmatter.title}
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content columns">
              <div className="column is-10 is-offset-1">
                <HTMLContent content={markdown.html} />
                <h3>{markdown.frontmatter.formTitle}</h3>
                <form
                  action="https://api.staticforms.xyz/submit" 
                  method="post"
                >
                  <input type="text" name="honeypot" style={{display:`none`}} />
                  <input type="hidden" name="accessKey" value="0433516e-0f70-49a1-a3ef-9c621a70b4b3" />
                  <input type="hidden" name="subject" value="Contact us - xrbarcelona.org" />
                  <input type="hidden" name="redirectTo" 
                    value={`https://xrbarcelona.org/${languageKey}/contact/thanks/`} />
                  
                  <div className="field">
                    <label className="label" htmlFor={'name'}>
                        {intl[languageKey].contactForm.name}
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                      {intl[languageKey].contactForm.email}
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'message'}>
                      {intl[languageKey].contactForm.message}
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={'message'}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-link" type="submit">
                      {intl[languageKey].contactForm.send}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

ContactIndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.node.isRequired,
      frontmatter: PropTypes.shape({
        languageKey: PropTypes.string,
        title: PropTypes.string,
        formTitle: PropTypes.string
      }),
    }),
  }),
}

export default ContactIndexPage

export const pageQuery = graphql`
  query ContactIndexPage($languageKey: String!) {
    markdownRemark(frontmatter: { 
          templateKey: { eq: "contact-index-page" }
          languageKey: { eq: $languageKey }
        }) {
      id
      html
      frontmatter {
        title
        languageKey
        formTitle
      }
    }
  }
`