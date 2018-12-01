const Button = ({ href, label, ...props }) => (
  <a href={href}>
    <b>{label}</b>

    <style jsx>
      {`
        a {
          height: 56px;
          padding: 0px 64px;

          background: white;
          color: #545454;
          font-size: 18px;
          text-decoration: none;

          border-radius: 4px;
          border-color: #545454;
          border-style: solid;
          border-width: 1px;

          display: inline-flex;
          justify-content: center;
          align-items: center;
          text-align: center;

          transition: border 0.2s ease 0s, background 0.2s ease 0s,
            color 0.2s ease-out 0s;
        }
        @media (min-width: 768px) {
          a:not(:first-of-type) {
            margin-left: 12px;
          }
        }

        a:hover {
          color: #0a0a0a;
          border-color: #0a0a0a;
          background: white;
        }

        b {
          display: inline-block;
          position: relative;
        }
      `}
    </style>
  </a>
)

const ButtonBlock = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <Button href={item.href} label={item.label} />
      ))}
      <style jsx>
        {`
          div {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, auto));
            grid-gap: 12px;
          }
        `}
      </style>
    </div>
  )
}

export default ButtonBlock
