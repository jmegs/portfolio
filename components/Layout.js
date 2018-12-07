import Head from 'next/head'

const Layout = props => {
  const cx = `layout ${props.dark ? 'dark' : ''}`
  return (
    <div className={cx}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{props.title ? `${props.title} | ` : ``}John Meguerian</title>
        <meta
          name="description"
          content="Product designer and occasional developer in NYC. Currently working at Squarespace. Formerly Experience Design at R/GA."
        />
        <link rel="icon" href="/static/emoji.png" type="image/png" />
      </Head>
      {props.children}
    </div>
  )
}

export default Layout
