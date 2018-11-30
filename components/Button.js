const Button = ({ children, href, ...props }) => {
  return (
    <a href={href}>
      <b>{children}</b>

      <style jsx>
        {`
          a {
            height: 56px;
            padding: 0px 64px;
            margin-top: 12px;
            margin-bottom: 12px;
            margin-left: 12px;

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

          a:first-of-type {
            margin-left: 0;
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
}

export default Button
