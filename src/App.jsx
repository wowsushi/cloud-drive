import React, { useState } from 'react'

import SideBar from './component/SideBar'
import Main from './component/Main'
import Modal from './component/Modal'
import './assect/css/normalize.css'
import './App.scss'

import upload from './assect/img/upload.svg'

const App = () => {
  const [visible, setVisible] = useState(false)

  const openModal = props => {
    document.querySelector('.modal').classList.toggle('hide')
  }

  const closeHoverMenu = props => {
    const hoverMenu = document.querySelectorAll('.hover-menu')

    Array.from(hoverMenu).forEach(menu => {
      if (!menu.classList.contains('hide')) {
        menu.classList.toggle('hide')
      }
      //change css for side bar hover menu
      if (menu.classList.contains('side-menu')) {
        menu.closest('button').classList.remove('clicked')
        menu.closest('button').querySelector('img').src = upload
      }
    })
  }
  return (
    <div className="home" onClick={closeHoverMenu}>
      <SideBar openModal={() => setVisible(true)} />
      <Main />
      <Modal
        visible={visible}
        onOkHandler={() => setVisible(false)}
        onCancelHandler={() => setVisible(false)}
      />
    </div>
  )
}

export default App