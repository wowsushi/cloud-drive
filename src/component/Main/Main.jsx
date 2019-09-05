import React from 'react'

import SearchBar from './SearchBar'
import Button from '../Button'
import HoverMenu from '../HoverMenu'
import'./index.scss'

import cloud from '../../assect/img/cloud.svg'
// eslint-disable-next-line
import pdf from '../../assect/img/pdf.svg'
// eslint-disable-next-line
import mp4 from '../../assect/img/mp4.svg'
// eslint-disable-next-line
import doc from '../../assect/img/doc.svg'
// eslint-disable-next-line
import img from '../../assect/img/img.svg'
// eslint-disable-next-line
import folder from '../../assect/img/folder.svg'


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }

  openFileHoverMenu = e => {
    if (!e.target.closest('td') 
      || !e.target.closest('td').querySelector('.file-menu')) { 
        return 
    }

    e.target.closest('td').querySelector('.file-menu').classList.toggle('hide')
  }

  render() {
    return (
      <section className="main-panel">
        <SearchBar/>
        <div className="title-bar">
          <span className="title">我的檔案</span>
          <Button 
            btnName="看更多"
            btnClass="btn btn-border"
          />
        </div>
        <table className="my-file-panel" onClick={this.openFileHoverMenu}>
          <thead>
            <tr>
              <th colSpan="2">名稱</th>
              <th>上次修改</th>
              <th>檔案大小</th>
              <th>擁有者</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img className="icon" src={img} alt="" /></td>
              <td>走吧！一起用日語去旅行.mp4</td>
              <td>2019/6/10</td>
              <td>1MB</td>
              <td>Betty</td>
              <td ><Button btnName="..." btnClass="btn" /><HoverMenu type="file" /></td>
            </tr>
            <tr>
              <td><img className="icon" src={folder} alt="" /></td>
              <td>走吧！一起用日語去旅行.mp4</td>
              <td>2019/6/10</td>
              <td>1MB</td>
              <td>Betty</td>
              <td><Button btnName="..." btnClass="btn" /><HoverMenu type="file" /></td>
            </tr>
          </tbody>
        </table>
        <img className="bg-cloud" src={cloud} alt=""/>
      </section>
    )
  }
}

export default Main 