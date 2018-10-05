// @flow
import React from 'react'

const Card = ({ isBlue = false, style = {}, ...props }) => (
  <div
    {...props}
    style={{
      backgroundColor: isBlue ? 'blue' : 'lightgray',
      padding: 20,
      marginTop: 5,
      width: 300,
      ...style,
    }}
  >
    {props.children}
  </div>
)

export default Card
