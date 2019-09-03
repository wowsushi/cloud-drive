import React from 'react'

import SideBar from './component/SideBar'
import Main from './component/Main'
import './assect/css/normalize.css'
import './App.scss'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBar/>
        <Main/>
      </React.Fragment>
    )
  }
}
 
export default App