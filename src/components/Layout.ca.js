import React from 'react';
import Layout from './Layout';
import { addLocaleData } from 'react-intl';

import messages from '../data/messages/ca';
import ca from 'react-intl/locale-data/ca';
import 'intl/locale-data/jsonp/ca';

addLocaleData(ca);

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />
);