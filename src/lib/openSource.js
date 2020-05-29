import fs from "fs"
import path from "path"

const dir = path.join(process.cwd(), "src", "content", "open_source")

export function getOpenSourceProjects() {
  const fullPath = path.join(dir, "open-source.json")
  const content = fs.readFileSync(fullPath, "utf8")
  return JSON.parse(content)
}
