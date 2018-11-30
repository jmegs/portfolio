import AnimatedAnchor from './AnimatedAnchor'

const ExternalLink = ({ href, label }) => (
  <AnimatedAnchor href={href}>
    {label}
    <style jsx>{`
      a {
        display: table;
        color: inherit;
        text-decoration: none;
      }
    `}</style>
  </AnimatedAnchor>
)

const Social = () => (
  <nav className="big-serif">
    <ExternalLink href="https://twitter.com/jmegs" label="Twitter" />
    <ExternalLink href="https://instagram.com/jmegs_" label="Instagram" />
    <ExternalLink href="https://github.com/jmegs" label="Github" />
    <style jsx>{`
      nav {
        margin-top: 50px;
      }
    `}</style>
  </nav>
)

export default Social
