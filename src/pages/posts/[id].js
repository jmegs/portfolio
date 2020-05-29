import TitleBlock from "../../components/TitleBlock"
import formatDate from "../../lib/date"
import { getAllPostIds, getPost } from "../../lib/posts"
import { NextSeo } from "next-seo"

export default ({ postData }) => {
  // TODO add an excerpt, stick it in the description field of NextSEO
  return (
    <>
      <NextSeo
        title={postData.title}
        openGraph={{
          title: `${postData.title} • John Meguerian`
        }}
      />
      <article className="post">
        <TitleBlock
          title={postData.title}
          subtitle={formatDate(postData.date)}
        />
        <div
          className="prose"
          dangerouslySetInnerHTML={{
            __html: postData.contentHtml
          }}
        ></div>
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPost(params.id)
  return {
    props: {
      postData
    }
  }
}
