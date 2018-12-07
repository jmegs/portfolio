import { easeOut } from './helpers/timing'

const AnimatedAnchor = props => {
  return (
    <a className="animated-anchor" {...props}>
      {props.children}
    </a>
  )
}

export default AnimatedAnchor
