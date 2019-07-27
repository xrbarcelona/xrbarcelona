import React from 'react'
import Layout from '../components/Layout'
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1><FormattedMessage id='notfound.header' /></h1>
      <p><FormattedMessage id='notfound.description' /></p>
    </div>
  </Layout>
)

export default injectIntl(NotFoundPage)
