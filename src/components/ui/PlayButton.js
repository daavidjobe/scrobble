import React from 'react'

const PlayButton = ({ onClick, width, color }) => {
  const pathData = [
    'M', [0, 0],
    'L', [width, width / 2],
    'L', [0, width],
    'Z'
  ].join(' ')

  return (
    <a className="play-btn" onClick={onClick} target='_blank'>
      <svg width={width} height={width}>
        <path fill={color} stroke={color} d={pathData} />
      </svg>
    </a>
  )
}

export default PlayButton
