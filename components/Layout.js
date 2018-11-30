import Head from 'next/head'

const Layout = props => (
  <div>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>{props.title ? `${props.title} | ` : ``}John Meguerian</title>
    </Head>
    {props.children}

    <style jsx>{`
      div {
        color: ${props.dark ? 'white' : '#0a0a0a'};
        background: ${props.dark ? '#0a0a0a' : 'white'};
      }
    `}</style>

    <style jsx>{`
      div {
        min-height: 100vh;
        padding: 3vmax;
      }
    `}</style>

    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Poppins:300');

      @font-face {
        font-family: 'Recoleta';
        src: url('/static/fonts/recoleta-regular.woff2') format('woff2'),
          url('/static/fonts/recoleta-regular.woff') format('woff');
      }

      *,
      *:before,
      *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-weight: 300;
      }

      body {
        min-height: 100vh;
        font-size: 20px;
        font-family: Poppins, system-ui;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        width: 100%;
        height: auto;
      }
      .big-serif {
        font-family: Recoleta, serif;
        font-weight: 400;
        font-size: calc(25px + 30 * ((100vw - 375px) / 1225));
        color: inherit;
      }

      @media screen and (min-width: 1600px) {
        .big-serif {
          font-size: 55px;
        }
      }

      @media screen and (max-width: 420px) {
        .big-serif {
          font-size: 25px;
        }
      }
    `}</style>
  </div>
)

export default Layout
