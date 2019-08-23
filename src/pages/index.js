import React from 'react'
import Layout from '../components/layout'

const Index = ({ data }) => {
  return (
    <Layout>
      <section className="introduction">
        <h1>
          John Meguerian is a product designer based in NYC. Currently at{' '}
          <a href="https://squarespace.com">Squarespace</a>.
        </h1>
      </section>

      <section className="teasers">
        <div className="teaser">
          <img
            className="teaser__img"
            src="https://picsum.photos/1500/1000?grayscale"
            alt=""
          />
          <h2 className="teaser__title">Cool Project</h2>
          <div className="teaser__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eligendi quis, possimus velit ea similique voluptas
              magni consequatur quia iure incidunt recusandae voluptatibus
              repellat, vero assumenda molestias magnam laboriosam ipsam!
            </p>
            <a className="teaser__link" href="#">
              See More
            </a>
          </div>
        </div>
        <div className="teaser">
          <img
            className="teaser__img"
            src="https://picsum.photos/1500/1000?grayscale"
            alt=""
          />
          <h2 className="teaser__title">Cool Project</h2>
          <div className="teaser__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eligendi quis, possimus velit ea similique voluptas
              magni consequatur quia iure incidunt recusandae voluptatibus
              repellat, vero assumenda molestias magnam laboriosam ipsam!
            </p>
            <a className="teaser__link" href="#">
              See More
            </a>
          </div>
        </div>
        <div className="teaser">
          <img
            className="teaser__img"
            src="https://picsum.photos/1500/1000?grayscale"
            alt=""
          />
          <h2 className="teaser__title">Cool Project</h2>
          <div className="teaser__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eligendi quis, possimus velit ea similique voluptas
              magni consequatur quia iure incidunt recusandae voluptatibus
              repellat, vero assumenda molestias magnam laboriosam ipsam!
            </p>
            <a className="teaser__link" href="#">
              See More
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
