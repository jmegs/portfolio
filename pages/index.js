import Layout from '../components/Layout'
import Link from 'next/link'

const Samsung = (
  <Link href="/project/samsung">
    <a>Samsung</a>
  </Link>
)
const Equinox = (
  <Link href="/project/equinox">
    <a>Equinox</a>
  </Link>
)
const Squarespace = <a href="https://squarespace.com">Squarespace</a>
const Instagram = <a href="https://instagram.com/jmegs_">Instagram</a>
const Twitter = <a href="https://twitter.com/jmegs">Instagram</a>
const Github = <a href="https://github.com/jmegs">Github</a>
const Linkedin = <a href="https://linkedin.com/in/johnmeguerian/">Linkedin</a>

const HomePage = () => {
  return (
    <Layout>
      <h1>
        John Meguerian is a product designer and occasional developer at{' '}
        {Squarespace}. View his recent work for {Equinox} and {Samsung} or visit
        on {Instagram}, {Twitter}, {Github}, or {Linkedin}.
      </h1>
    </Layout>
  )
}

export default HomePage
