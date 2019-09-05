import React from 'react'

import SideBar from './component/SideBar'
import Main from './component/Main'
import Modal from './component/Modal'
import './assect/css/normalize.css'
import './App.scss'

import upload from './assect/img/upload.svg'

class App extends React.Component {
  openModal = props => {
    document.querySelector('.modal').classList.toggle('hide')
  }

  closeHoverMenu = props => {
    const hoverMenu = document.querySelectorAll('.hover-menu')

    Array.from(hoverMenu).forEach( menu => {
      if (!menu.classList.contains('hide')) {
        menu.classList.toggle('hide')
      } 
      //change css for side bar hover menu
      if(menu.classList.contains('side-menu')) {
        menu.closest('button').classList.remove('clicked')
        menu.closest('button').querySelector('img').src = upload 
      }
    })
  }
  
  render() {
    return (
      <div className="home" onClick={this.closeHoverMenu}>
        <SideBar openModal={this.openModal}/>
        <Main/>
        <Modal/>
      </div>
    )
  }
}
 
export default App