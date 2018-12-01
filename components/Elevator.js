import { Component } from 'react'
import { easeOut } from './helpers/timing'

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    <path d="M8 20.998a.5.5 0 0 1 0-1h3.5v-18.5l-5.2 3.9a.503.503 0 0 1-.795-.47.498.498 0 0 1 .195-.33l6-4.5a.59.59 0 0 1 .069-.04.505.505 0 0 1 .215-.06h.034a.531.531 0 0 1 .215.06c.013.006.039.018.068.039l6 4.5c.107.08.176.197.195.329a.503.503 0 0 1-.796.473l-5.2-3.9v18.5H16a.5.5 0 0 1 0 1H8zM8 23.998a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1H8z" />
  </svg>
)

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
        <span className="before">Scroll</span>
        <Icon />
        <span className="after">to Top</span>
        <style jsx>
          {`
            .elevator {
              display: grid;
              grid-template-columns: 1fr 24px 1fr;
              grid-column-gap: 12px;

              cursor: pointer;

              font-size: 18px;
              text-align: center;
            }

            span.before {
              justify-self: end;
            }

            span.after {
              justify-self: start;
            }

            @media (min-width: 768px) {
              span.before {
                opacity: 0;
                transform: translateX(12px) scale(0.95);
                transition: all 500ms ${easeOut};
                pointer-events: none;
              }

              span.after {
                opacity: 0;
                transform: translateX(-12px) scale(0.95);
                transition: all 500ms ${easeOut};
                pointer-events: none;
              }

              .elevator:hover span {
                transform: translateX(0) scale(1);
                opacity: 1;
                pointer-events: all;
              }
            }
          `}
        </style>
      </div>
    )
  }
}

export default Elevator
