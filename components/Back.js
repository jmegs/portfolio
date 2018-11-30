import Link from 'next/link'
import { easeOut } from './helpers/timing'

const Back = () => {
  return (
    <Link href="/" prefetch>
      <a>
        <svg width="24px" height="24px" viewBox="0 0 24 24">
          <path d="M16 7.5a.5.5 0 0 1-.354-.853L17.793 4.5H.5a.5.5 0 0 1 0-1h17.293l-2.146-2.146a.5.5 0 0 1 .707-.708l3 3a.505.505 0 0 1 0 .708l-2.999 2.999A.5.5 0 0 1 16 7.5zM16 23.5a.5.5 0 0 1-.354-.853l2.146-2.146H.5a.502.502 0 0 1 0-1.001h17.293l-2.146-2.146a.5.5 0 0 1 .707-.708l3 3a.496.496 0 0 1 .109.545.477.477 0 0 1-.109.163l-2.999 2.999A.5.5 0 0 1 16 23.5zM8 15.5a.5.5 0 0 1-.354-.146l-3-3a.508.508 0 0 1 0-.708l3-3A.5.5 0 0 1 8.5 9a.5.5 0 0 1-.146.354L6.207 11.5H23.5a.5.5 0 0 1 0 1H6.207l2.146 2.146A.5.5 0 0 1 8 15.5z" />
        </svg>
        <span>Back</span>
        <style jsx>
          {`
            a {
              display: flex;
              align-items: center;
              margin-bottom: 124px;
              text-decoration: none;
              color: inherit;
            }
            svg {
              margin-right: 20px;
            }
            span {
              font-size: 18px;
              opacity: 0;
              transform: translateX(-12px) scale(0.95);
              transition: all 500ms ${easeOut};
              pointer-events: none;
            }
            a:hover span {
              transform: translateX(0) scale(1);
              opacity: 1;
              pointer-events: all;
            }
          `}
        </style>
      </a>
    </Link>
  )
}

export default Back
