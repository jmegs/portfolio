import fs from "fs"
import path from "path"

const projectsDir = path.join(process.cwd(), "src", "content", "projects")
const JSON_REGEX = /\.json$/

export function getProjectsMeta() {
  const filenames = fs.readdirSync(projectsDir)
  const allProjectsMeta = filenames.map(filename => {
    const id = filename.replace(JSON_REGEX, "")
    const fullPath = path.join(projectsDir, filename)
    const content = fs.readFileSync(fullPath, "utf8")

    const {title, thumbnail} = JSON.parse(content)

    return {
      id,
      title,
      thumbnail,
      slug: `/work/${id}`
    }
  })
  return allProjectsMeta
}

export function getAllProjectIds() {
  const filenames = fs.readdirSync(projectsDir)
  return filenames.map(filename => {
    return {
      params: {
        id: filename.replace(JSON_REGEX, "")
      }
    }
  })
}


// TODO get all of the project's json by its id
export function getProjectData(id) {
  const fullPath = path.join(projectsDir, `${id}.json`)
  const content = fs.readFileSync(fullPath, "utf8")
  const parsed = JSON.parse(content)

  return {
    id,
    ...parsed
  }
}