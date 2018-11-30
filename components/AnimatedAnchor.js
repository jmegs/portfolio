import { easeOut } from './helpers/timing'

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
          transform: scale(1) rotateZ(0);
          transform-origin: left center;
          transition: all 500ms ${easeOut};
        }

        a:hover {
          transform: scale(1.06) rotateZ(-2deg);
        }
        a:before {
          content: '';
          position: absolute;
          height: 2px;
          bottom: 8px;
          left: 0;
          background-color: white;
          visibility: hidden;
          width: 100%;
          transform: scaleX(0);
          transition: all 500ms ${easeOut};
        }

        a:hover:before {
          visibility: visible;
          width: 100%;
          transform: scaleX(1);
        }
      `}</style>
    </a>
  )
}

export default AnimatedAnchor
