import remark from "remark"
import html from "remark-html"
import unwrapImages from "remark-unwrap-images"

export default async function(markdown) {
  const processedContent = await remark()
      .use(unwrapImages)
      .use(html)
      .process(markdown)
  
  return processedContent
}