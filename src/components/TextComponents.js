import system from 'system-components'
import { mono } from '../theme'

export const Mono = system(
  {
    fontFamily: mono,
    fontSize: 14,
    lineHeight: '30px',
  },
  'space'
)

export const Heading = system({
  is: 'h1',
  fontSize: [24, 32],
  fontWeight: 300,
  maxWidth: 448,
  mb: 80,
  mt: [40, 72],
  lineHeight: 1.5,
})

export const ListHeading = system({
  is: 'h2',
  fontSize: [16, 20],
  fontWeight: 300,
  lineHeight: 1,
})

export const Body = system(
  {
    is: 'p',
    fontSize: 18,
    lineHeight: 1.66,
  },
  'space',
  'maxWidth'
)

export const LabHeading = Body.extend`
  text-decoration: underline;
`
