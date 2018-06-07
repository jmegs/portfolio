import { keyframes } from 'styled-components'

const fadeInUpKeyframes = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const fadeInFwdKeyframes = keyframes`
  0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
`

export const fadeInFwd = delay => {
  return `animation: ${fadeInFwdKeyframes} ${delay}ms cubic-bezier(0.390, 0.575, 0.565, 1.000) both;`
}

export const fadeInUp = delay => {
  return `animation: ${fadeInUpKeyframes} ${delay}ms cubic-bezier(0.390, 0.575, 0.565, 1.000) both;`
}
