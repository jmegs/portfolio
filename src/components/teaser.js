import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Teaser = ({ data }) => {
  let link
  if (data.isExternal) {
    link = (
      <a href={data.externalLink} className="teaser__link">
        Visit
      </a>
    )
  } else {
    link = (
      <Link className="teaser__link" to={`/work/${data.slug}`}>
        Read More
      </Link>
    )
  }
  return (
    <div className="teaser">
      <Img
        className="teaser__img"
        fluid={data.featuredImage.fluid}
        alt={data.alt || data.title}
      />
      <h2 className="teaser__title">{data.title}</h2>
      <div className="teaser__text">
        {/* TODO: this extra div is ugly, fix. */}
        <div
          dangerouslySetInnerHTML={{
            __html: data.summaryNode.childMarkdownRemark.html
          }}
        />
        {link}
      </div>
    </div>
  )
}

export default Teaser
