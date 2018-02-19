// This function takes an array index and returns a zero padded number
// starting at one rather than zero. Useful for displaying the contents 
// of an array in a numbered list.

function indexToNumber(idx) {
  return idx < 10 ? `0${idx + 1}` : `${idx + 1}`
}

export default indexToNumber
