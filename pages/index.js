import React, { Fragment } from 'react'

const HomePage = () => {
  return (
    <Fragment>
      <main className="container">
        <div className="text">
          <p>John Meguerian is a product designer and developer in NYC.</p>
          <p>
            He’s recently made a <a href="">personal training app</a> for
            Equinox and an interactive retail experience and ecommerce website
            for Samsung.
          </p>

          <p>
            He also works on development projects like Static Starter, CSS
            Posters, and his personal website.
          </p>

          <p>
            Find out more about him, check out more work on dribbble and github,
            or say hi on twitter or instagram.
          </p>
        </div>
        <div className="photo-wrap">
          <img src="" alt="" className="overlay-photo" />
          <img src="/static/john.jpg" alt="" className="base-photo" />
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 8.888888889vh 8.333333333vw;
          display: grid;
          grid-template-columns: 100%;
          gap: 2.7vmax;
          min-height: calc(100vh - 60px);
        }

        .text {
          font-family: halyard-display, system-ui;
          font-size: 2.7vmax;
          line-height: 1.5;
          max-width: 14.2857142857em;
          align-self: center;
        }

        .text a {
          // do something cooler
          color: inherit;
        }

        .text p {
          margin-bottom: 20px;
        }

        .photo-wrap {
          align-self: center;
        }

        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .base-photo {
          height: 80vh;
          object-position: center top;
        }
        @media (min-width: 960px) {
          main {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 1280px) {
          .text {
            font-size: 1.944444444vw;
            max-width: 27.77777778vw;
          }

          .text p {
            margin-bottom: 2.2222222vh;
          }
        }
      `}</style>
    </Fragment>
  )
}

export default HomePage
