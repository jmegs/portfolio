import Layout from '../components/Layout'
import Projects from '../components/Projects'
import Social from '../components/Social'

const HomePage = () => {
  return (
    <Layout dark>
      <h1 className="big-serif">
        John Meguerian is a product designer and occasional developer in NYC.
        Currently at Squarespace.
      </h1>
      <Projects />
      <Social />
      <style jsx>
        {`
          h1 {
            max-width: 40ch;
          }
        `}
      </style>
    </Layout>
  )
}

export default HomePage
