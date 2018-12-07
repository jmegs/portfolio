import AnimatedAnchor from './AnimatedAnchor'

const ExternalLink = ({ href, label }) => (
  <a className="animated-anchor social-link" href={href}>
    {label}
  </a>
)

const Social = () => (
  <nav className="big-serif social-list">
    <ExternalLink href="https://twitter.com/jmegs" label="Twitter" />
    <ExternalLink href="https://instagram.com/jmegs_" label="Instagram" />
    <ExternalLink href="https://github.com/jmegs" label="Github" />
  </nav>
)

export default Social
