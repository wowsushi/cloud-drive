import React from 'react'

import './index.scss'

import logo from '../../assect/img/logo.png'
import upload from '../../assect/img/upload.svg'
import myFolder from '../../assect/img/my-folder.svg'
import star from '../../assect/img/star.svg'
import sharingContent from '../../assect/img/sharing-content.svg'
import garbage from '../../assect/img/garbage.svg'
import user from '../../assect/img/user.png'

import Button from '../Button' 

const SideBar = props => {
  return (
    <aside className="side-bar"> 
      <div className="side-bar-title">
        <img src={logo} alt=""/>
      </div>
      <Button 
        btnName="上傳檔案"
        btnClass="btn btn-with-bg"
        imgPath={upload}
      />
      <Button 
        btnName="我的檔案"
        btnClass="btn btn-normal"
        imgPath={myFolder}
      />
      <Button 
        btnName="已加星號"
        btnClass="btn btn-normal"
        imgPath={star}
      />
      <Button 
        btnName="檔案共享"
        btnClass="btn btn-normal"
        imgPath={sharingContent}
      />
      <Button 
        btnName="垃圾桶"
        btnClass="btn btn-normal"
        imgPath={garbage}
      />
      <div className="user-panel">
        <img className="user-img" src={user} alt="user"/>
        <span className="user-name">Betty</span>
        <span className="user-type">User</span>
        <span className="capicity-bar"></span>
        <span className="capicity">容量 1.0 MB / 10.0 MB</span>
      </div>
    </aside>
  )
} 

export default SideBar