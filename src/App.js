import React from 'react'

import SideBar from './component/SideBar'
import Main from './component/Main'
import Modal from './component/Modal'
import './assect/css/normalize.css'
import './App.scss'

class App extends React.Component {
  openModal = props => {
    document.querySelector('.modal').classList.toggle('hide')
  }
  
  render() {
    return (
      <React.Fragment>
        <SideBar openModal={this.openModal}/>
        <Main/>
        <Modal/>
      </React.Fragment>
    )
  }
}
 
export default App