import React from 'react'

import './index.scss'
import HoverMenu from '../../HoverMenu'
import icon from '../../../assect/img/search.svg'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      searchBar: false
    }
  }

  openSearchBar = () => {
    this.setState({searchBar: !this.state.searchBar}) 
  } 

  openHoverMenu = e => {
    console.log(e.target)
    if (!e.target.closest('.search-bar')) return 
    e.target.closest('.search-bar').querySelector('.search-menu').classList.toggle('hide')

  }

  render() {
    return (
      <div className="search-bar">
        <img src={icon} alt="icon"/>
        <input 
          type="text" 
          placeholder="搜尋您的檔案"
        />
        <span className="triangle"  onClick={this.openHoverMenu}></span>
        <HoverMenu type="search"/>
      </div>
    )
  }
}

export default SearchBar