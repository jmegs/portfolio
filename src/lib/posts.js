import fs from "fs"
import path from "path"
import matter from "gray-matter"
import convertMarkdown from "./markdownConverter"

const postsDir = path.join(process.cwd(), "src", "content", "posts")
const MD_REGEX = /\.md$/

export function getSortedPostsMeta() {
  const filenames = fs.readdirSync(postsDir)
  const allPostsMeta = filenames.map((filename) => {
    const id = filename.replace(MD_REGEX, "")
    const fullPath = path.join(postsDir, filename)
    const fileContent = fs.readFileSync(fullPath, "utf8")

    const matterResult = matter(fileContent)

    return {
      id,
      ...matterResult.data
    }
  })

  return allPostsMeta.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const filenames = fs.readdirSync(postsDir)
  return filenames.map((filename) => {
    return {
      params: {
        id: filename.replace(MD_REGEX, "")
      }
    }
  })
}

// TODO: get post with processed markdown by id
export async function getPost(id) {
  const fullPath = path.join(postsDir, `${id}.md`)
  const bytes = fs.readFileSync(fullPath, "utf8")

  const matterResult = matter(bytes)
  const processedContent = await convertMarkdown(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
