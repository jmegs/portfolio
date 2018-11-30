const AnimatedAnchor = props => {
  return (
    <a {...props}>
      {props.children}
      <style jsx>{`
        a {
          display: table;
          position: relative;
          color: inherit;
          text-decoration: none;
        }
        a:before {
          content: '';
          position: absolute;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: white;
          visibility: hidden;
          width: 1%;
           {
            /* transform: translateX(-100%); */
          }
          transition: all 300ms ease-in-out;
        }

        a:hover:before {
          visibility: visible;
          width: 100%;
           {
            /* transform: translateX(0); */
          }
        }
      `}</style>
    </a>
  )
}

export default AnimatedAnchor
