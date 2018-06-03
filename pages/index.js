import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const HomePage = () => {
  return (
    <Main>
      <Text>
        <p>John Meguerian is a product designer and developer in NYC.</p>
        <p>
          He’s recently made a <a href="">personal training app</a> for Equinox
          and an interactive{' '}
          <Link href="/project/samsung-retail">retail experience</Link> and{' '}
          <Link href="/project/samsung-dotcom">ecommerce website</Link> for
          Samsung.
        </p>

        <p>
          He also works on development projects like{' '}
          <a href="https://github.com/jmegs/static-starter">Static Starter</a>,{' '}
          <a href="https://codepen.io/collection/XRKYmK/">CSS Posters</a>, and
          his <a href="https://github.com/jmegs/portfolio">personal website</a>.
        </p>

        <p>
          Find out more about him, check out more work on{' '}
          <a href="https://dribbble.com/jmegs">dribbble</a> and{' '}
          <a href="https://github.com/jmegs">github</a>, or say hi on{' '}
          <a href="https://twitter.com/jmegs">twitter</a> or{' '}
          <a href="https://instagram.com/jmegs_">instagram</a>.
        </p>
      </Text>
      <PhotoWrap>
        <Image src="" alt="" className="overlay-photo" />
        <BaseImage src="/static/john.jpg" alt="Photo of John" />
      </PhotoWrap>
    </Main>
  )
}

export default HomePage

const Main = styled.main`
  padding: 8.888888889vh 8.333333333vw;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 3vmax;

  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
`
const Text = styled.article`
  font-family: halyard-display, system-ui;
  font-size: 2.7vmax;
  line-height: 1.5;
  align-self: center;

  a {
    // do something cooler
    color: inherit;
  }

  p {
    margin-bottom: 20px;
  }

  @media (min-width: 1280px) {
    font-size: 1.944444444vw;
    max-width: 27.77777778vw;

    p {
      margin-bottom: 2.2222222vh;
    }
  }
`

const PhotoWrap = styled.div`
  align-self: center;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

const BaseImage = Image.extend`
  height: 80vh;
  object-position: center top;
`
