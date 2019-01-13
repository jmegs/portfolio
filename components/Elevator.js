import { Component } from 'react'

class Elevator extends Component {
  scrollToTop = () =>
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  render() {
    return (
      <a className="elevator" onClick={this.scrollToTop}>
        Scroll to top
      </a>
    )
  }
}

export default Elevator
