import React from 'react'
import './index.scss'
import uploadFile from '../../assect/img/upload-file.svg'
import uploadFolder from '../../assect/img/upload-folder.svg'
import addFolder from '../../assect/img/add-folder.svg'

const HoverMenu = ({ type }) => {
  switch (type) {
    case 'file':
      return (
        <ul className="file-menu hide">
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
          <ul className="side-menu hide">
            <li><img src={uploadFile} alt=""/>上傳檔案</li>
            <li><img src={uploadFolder} alt=""/>上傳資料夾</li>
            <li><img src={addFolder} alt=""/>新資料夾</li>
          </ul>   
        )
    default:
      console.log('no hover menu')
      return null
  }
}

export default HoverMenu