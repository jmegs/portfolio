import React from 'react'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <Main>
      <Text>
        <p>John Meguerian is a product designer and developer in NYC.</p>
        <p>
          He’s recently made a <a href="">personal training app</a> for Equinox
          and an interactive retail experience and ecommerce website for
          Samsung.
        </p>

        <p>
          He also works on development projects like Static Starter, CSS
          Posters, and his personal website.
        </p>

        <p>
          Find out more about him, check out more work on dribbble and github,
          or say hi on twitter or instagram.
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
