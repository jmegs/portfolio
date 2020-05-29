import InternalLink from "next/link"

// Decides for us whether to render a Next Link or a regular a href

export default (props) => {
  const { href, as, children, ...rest } = props
  const isExternal = href.startsWith("http") || href.startsWith("mailto")

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <InternalLink href={href} as={as}>
      <a {...rest}>{children}</a>
    </InternalLink>
  )
}
