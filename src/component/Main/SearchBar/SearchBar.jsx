import React from 'react'

import './index.scss'
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

  render() {
    return (
      <div className="search-bar">
        <img src={icon} alt="icon"/>
        <input 
          type="text" 
          placeholder="搜尋您的檔案"
        />
        <span className="triangle"></span>
      </div>
    )
  }
}

export default SearchBar