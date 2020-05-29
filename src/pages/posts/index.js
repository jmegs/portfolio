import Link from "../../components/Link"
import Date from "../../components/Date"
import { getSortedPostsMeta } from "../../lib/posts"
import TitleBlock from "../../components/TitleBlock"
import { NextSeo } from "next-seo"

export default ({ allPosts }) => (
  <>
    <NextSeo title="Posts • John Meguerian" />
    <TitleBlock title="Posts" />
    <ul className="posts-list">
      {allPosts.map((post) => (
        <li className="posts-item" key={post.id}>
          <Link
            className="heading-lg color-fg posts-item__title"
            href="/posts/[id]"
            as={`/posts/${post.id}`}
          >
            {post.title}
          </Link>
          <Date
            className="heading-md color-text posts-item__date"
            dateString={post.date}
          />

          {post.excerpt && <p>{post.excerpt}</p>}
        </li>
      ))}
    </ul>
  </>
)

export async function getStaticProps() {
  const allPosts = getSortedPostsMeta()
  return {
    props: {
      allPosts
    }
  }
}
