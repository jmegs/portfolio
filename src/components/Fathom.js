import * as React from 'react'

// TODO extract siteid into environent variable
export default function Fathom() {
  React.useEffect(() => {
    const tracker = window.document.createElement('script')
    const firstScript = window.document.getElementsByTagName('script')[0]
    tracker.defer = true
    tracker.setAttribute('site', "TVQPDWBA")
    tracker.setAttribute('spa', 'auto')
    tracker.setAttribute('excluded-domains', 'localhost,now.sh')
    tracker.setAttribute('included-domains', 'johnmeguerian.com')
    tracker.src = 'https://cdn.usefathom.com/script.js';
    firstScript.parentNode.insertBefore(tracker, firstScript)
  }, [])

  return null
}