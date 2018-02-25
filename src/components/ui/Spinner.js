import React from 'react'

const animation = 'spin 1.6s linear infinite'

const Spinner = ({ width, color, strokeWidth }) => {
  const box = `0 0 ${width} ${width}`
  const styles = {
    animation,
    transformOrigin: `${width / 2}px ${width / 2}px`
  }
  return <svg viewBox={box}>
    <linearGradient id='arc-gradient'>
      <stop offset='0%' stopOpacity='0' />
      <stop offset='19.99%' stopOpacity='0' />
      <stop offset='50%' stopColor={color} />
      <stop offset='100%' stopColor={color} />
    </linearGradient>
    <circle style={styles} r={width / 2 - 1}
      cx={width / 2} cy={width / 2}
      fill='transparent'
      stroke='url(#arc-gradient)'
      strokeWidth={strokeWidth}
    />
  </svg>
}

export default Spinner
