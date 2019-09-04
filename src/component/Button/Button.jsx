import React from 'react'

import HoverMenu from '../HoverMenu'
import './index.scss'
import uploadWhite from '../../assect/img/upload-white.svg'
import upload from '../../assect/img/upload.svg'

const openSideMenu = e => {
  if (! e.target.closest('button').querySelector('.side-menu')) return
  
  e.target.closest('button').querySelector('.side-menu').classList.toggle('hide')
  e.target.closest('button').classList.toggle('clicked')
  e.target.closest('button').querySelector('img').src = 
    (e.target.closest('button').querySelector('img').src.includes('white')) ? 
    upload : uploadWhite  

}

const Button = ({ btnName, btnClass, imgPath }) => {
  return (
    <button className={btnClass} onClick={ openSideMenu}>
      {imgPath && <img src={imgPath} alt="icon"/>}
      <span>{btnName}</span>
      {(btnClass.includes('btn-with-bg')) && <HoverMenu type="side"/>}
    </button>
  )
}

export default Button 