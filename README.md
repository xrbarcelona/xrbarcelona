# XR Barcelona website

Website for the XR Bacelona community

Deployment status:
[![Netlify Status](https://api.netlify.com/api/v1/badges/7a4772d5-779b-4eb5-a928-a2637d5fa329/deploy-status)](https://app.netlify.com/sites/youthful-stonebraker-c356f5/deploys)

# Access Locally
```
$ git clone https://github.com/xrbarcelona/xrbarcelona.git
$ cd xrbarcelona
$ npm install
$ npm run start
```

To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

# Based on Gatsby + Netlify CMS Starter

This repo contains an example business website that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Demo Link](https://gatsby-netlify-cms.netlify.com/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Features ##

- A simple landing page with blog functionality built with Netlify CMS
- Editabe Pages: Landing, About, Event, Blog-Collection and Contact page with Netlify Form support
- Create Blog posts from Netlify CMS
- Tags: Separate page for posts under each tag
- Basic directory organization
- Uses Bulma for styling, but size is reduced by `purge-css-plugin`
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatbsy-image` with Netlify-CMS preview support
- Separate components for everything
- Netlify deploy configuration
- Netlify function support, see `src/lambda` folder
- Perfect score on Lighthouse for SEO, Accessibility and Performance (wip:PWA)
- ..and more


### Media Libraries (installed, but optional)

Media Libraries have been included in this starter as a default. If you are not planning to use `Uploadcare` or `Cloudinary` in your project, you **can** remove them from module import and registration in `src/cms/cms.js`. Here is an example of the lines to comment or remove them your project.
```javascript
import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import EventPagePreview from './preview-templates/EventPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('events', EventPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

```

## Getting Started (Without Netlify)
```
$ gatsby new [SITE_DIRECTORY_NAME] https://github.com/netlify-templates/gatsby-starter-netlify-cms/
$ cd [SITE_DIRECTORY_NAME]
$ npm run build
$ npm run serve
```

### Setting up the CMS
Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Debugging
Windows users might encounter ```node-gyp``` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.
```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

## Purgecss
This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.

# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).
