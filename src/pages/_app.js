import Layout from "../components/Layout"
import Head from "next/head"
import { DefaultSeo } from "next-seo"

import { defaults } from "../lib/seo"

import "../styles/main.scss"
import Fathom from "../components/Fathom"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...defaults} />
      <Fathom />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/img/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
