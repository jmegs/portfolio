import meta from "../content/site_meta.json"
import Link from "./Link"

export default () => {
  const colophon = meta.colophon
  return (
    <footer className="footer grid divider">
      <div className="footer__panic heading-md color-fg">Don't Panic.</div>

      <div className="footer__links">
        <ul className="footer__social heading-sm">
          {meta.socialLinks.map((item) => (
            <li key={item.name}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <ul className="footer__colophon">
          <li>
            Set in <Link href={colophon.font.url}>{colophon.font.name}</Link>
          </li>
          <li>
            Made with <Link href={colophon.generator.url}>{colophon.generator.name}</Link>
          </li>
          <li>
            Hosted with <Link href={colophon.host.url}>{colophon.host.name}</Link>
          </li>
          <li>
            Source on <Link href={colophon.repo.url}>Github</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
