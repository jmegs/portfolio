export default function TitleBlock(props) {
  const { title, subtitle } = props
  return (
    <div className="title-block">
      <h1>
        <div className="title-block__title">{title}</div>
        {subtitle && <div className="title-block__subtitle">{subtitle}</div>}
      </h1>
    </div>
  )
}
