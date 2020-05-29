export default function OpenSourceItem({ item }) {
  return (
    <li className="open-source-item">
      <h3 className="open-source-item__title heading-md">{item.title}</h3>
      <p className="open-source-item__desc">{item.description}</p>
      <div className="open-source-item__links">
        {item.url && <a href={item.url}>Visit</a>}
        {item.repo && <a href={item.repo}>Source Code</a>}
      </div>
    </li>
  )
}
