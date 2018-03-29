# John's Personal Site

This site runs on [Gatsby](http://gatsbyjs.org) and uses the [Gatsby Source DatoCms](https://github.com/datocms/gatsby-source-datocms) plugin to bring data in. See below for how to get data coming out of Dato to the site.

## Setup

### Installation

Clone the repo, `cd` into it and run `yarn` (or if using npm, `npm install`)

### Environment Variables

#### For Development

Create a `.env` file at the root of the project containing the following. This will be ignored by git.

```
DATO_API_TOKEN=your_readonly_api_token
```

#### For Production

If you are deploying to Netlify, create the following in Settings>Build and Deploy>Build Environment Variables.

```
DATO_API_TOKEN=your_readonly_api_token
GA_TRACKING_ID=your_google_analytics_id
```

If using another host, refer to their documentation for how to handle secret variables.

### Workflow

Run `yarn dev` to boot up the development environment

To set up continuous deployment with Netlify, see Netlify's [docs](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/). To deploy statically to anything, run `yarn build` then put the output folder wherever you want.
