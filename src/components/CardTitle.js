// @flow
import React from 'react'

const CardTitle = ({ isInverted = false, style = {}, ...props }) => (
  <h1 {...props} style={{ color: isInverted ? 'white' : 'black', ...style }}>
    {props.children}
  </h1>
)

export default CardTitle
