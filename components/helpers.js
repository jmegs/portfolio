// Constants
const a = -0.017
const b = 0.202
const c = -0.175
const e = 2.71828

// Tracking Formula from Inter UI
export function tracking(fz) {
  return a + b * Math.pow(e, c * fz)
}
