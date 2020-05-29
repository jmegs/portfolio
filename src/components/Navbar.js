import Link from "./Link"

export default () => (
  <header className="navbar heading-sm">
  <Link href="/" className="navbar__logo plain-link">JM</Link>
  <nav className="navbar__nav">
    <Link href="/" className="navbar__link plain-link">Work</Link>
    <Link href="/posts" className="navbar__link plain-link">Blog</Link>
    <Link href="/about" className="navbar__link plain-link">About</Link>
  </nav>
</header>
)