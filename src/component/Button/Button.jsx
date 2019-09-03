import React from 'react'

import './index.scss'


const Button = ({ btnName, btnClass, imgPath }) => {
  return (
    <button className={btnClass}>
      <img src={imgPath} alt="icon"/>
      <span>{btnName}</span>
    </button>
  )
}

export default Button 