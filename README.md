# John's Personal Site

This site is built with [nextjs](http://nextjs.org) and fetches content from [Contentful](https://contentful.com) at build time.

## Setup

```sh
# clone the repo
git clone https://github.com/jmegs/portfolio.git
```

```sh
# cd into it
cd portfolio
```

```sh
# install dependencies
npm i
```

## Workflow

Run `npm run dev` to boot up the development environment.

To pull content changes from contentful `npm run content`.

Static routes are defined in `next.config.js` which work on both client and server.

To output a static site, use `npm run build`. This will run the `content` script first to ensure we have the latest changes.

## Environment Variables

### For Development

Create a `.env` file at the root of the project containing the following. This will be ignored by git.

```
CONTENTFUL_SPACE=<your-space-id>
CONTENTFUL_TOKEN=<your-access-token>
```

### For Production

If you are deploying to Netlify, create the following in Settings > Build and Deploy > Build Environment Variables.

```
CONTENTFUL_SPACE=<your-space-id>
CONTENTFUL_TOKEN=<your-access-token>
GA_TRACKING_ID=<your-google-analytics-id>
```

If using another host, refer to their documentation for how to handle secret variables.
