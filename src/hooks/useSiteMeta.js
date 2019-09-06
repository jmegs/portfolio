import { useStaticQuery, graphql } from "gatsby"

export const useSiteMeta = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteTitle
            siteDescription
            siteUrl
            social {
              name
              url
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}