function logPortfolioClick(label) {
  if (typeof window.ga === 'function') {
    window.ga('send', 'event', {
      eventCategory: 'portfolio project',
      eventAction: 'click',
      eventLabel: label,
    })
  }
}

export default logPortfolioClick
