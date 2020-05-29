import { parseISO, format } from "date-fns"

/**
 * returns a human friendly date
 * by default the format is 05 May 2020
 * @param {string} dateString a date string that date-fns can understand
 * @param {string} formatString a date-fns format string to override the default
 */
export default (dateString, formatString = "dd LLL yyyy") => {
  const date = parseISO(dateString)
  return format(date, formatString)
}
