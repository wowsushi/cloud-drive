import React from 'react'
import './index.scss'

const closeModal = e => {
  if (e.target.classList.contains('modal') || e.target.classList.contains('cancel')) {
    e.currentTarget.classList.toggle('hide')
  } else {
    return
  }
}

const Modal = props => {
  return (
    <div className="modal hide" onClick={closeModal}>
      <div className="modal-content">
        <h3 className="title">建立新資料夾</h3>
        <input className="input" type="text" />
        <button className="cancel">取消</button>
        <button className="confirm">建立</button>
      </div>
    </div>
  )
}

export default Modal