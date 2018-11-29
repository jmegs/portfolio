const Layout = props => (
  <div>
    {props.children}

    <style jsx>{`
      div {
        color: ${'dark' in props ? 'white' : '#0a0a0a'};
        background: ${'dark' in props ? '#0a0a0a' : 'white'};
      }
    `}</style>

    <style jsx>{`
      div {
        min-height: 100vh;
        padding: 3vmax;
      }
    `}</style>

    <style jsx global>{`
      *,
      *:before,
      *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-weight: normal;
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
