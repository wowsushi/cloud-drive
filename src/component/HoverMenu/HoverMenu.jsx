import React from 'react'
import './index.scss'
import uploadFile from '../../assect/img/upload-file.svg'
import uploadFolder from '../../assect/img/upload-folder.svg'
import addFolder from '../../assect/img/add-folder.svg'


const HoverMenu = ({ type, openModal }) => {
  switch (type) {
    case 'file':
      return (
        <ul className="hover-menu file-menu hide">
          <li>共享</li>
          <li>下載</li>
          <li>標示星號</li>
          <li>重新命名</li>
          <li>移動</li>
          <li>複製</li>
        </ul>   
      )
      case 'side':
        return (
          <ul className="hover-menu side-menu hide">
            <li><img src={uploadFile} alt=""/>上傳檔案</li>
            <li><img src={uploadFolder} alt=""/>上傳資料夾</li>
            <li onClick={openModal}><img src={addFolder} alt=""/>新資料夾</li>
          </ul>   
        )
      case 'search':
        return (
          <ul className="hover-menu search-menu hide">
            <li>依上傳時間</li>
            <li>依修改時間</li>
            <li>依檔案大小</li>
            <li>依擁有者</li>
          </ul>   
        )
    default:
      console.log('no hover menu')
      return null
  }
}

export default HoverMenu