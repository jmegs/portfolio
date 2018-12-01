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
      <div className="elevator" onClick={this.scrollToTop}>
        To the Top
        <style jsx>
          {`
            .elevator {
              text-align: center;
            }
          `}
        </style>
      </div>
    )
  }
}

export default Elevator
