const Button = ({ href, label, ...props }) => (
  <a href={href} className=".button">
    <b className=".button__label">{label}</b>
  </a>
)

const ButtonBlock = ({ items }) => {
  return (
    <div className="button-block">
      {items.map((item, idx) => (
        <Button href={item.href} label={item.label} key={idx} />
      ))}
    </div>
  )
}

export default ButtonBlock
