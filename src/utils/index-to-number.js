function indexToNumber(idx) {
  return idx < 10 ? `0${idx + 1}` : `${idx + 1}`
}

export default indexToNumber
