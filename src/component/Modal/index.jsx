import React from 'react'
import Fader from '../Animations/Fader'

import './style.scss'

const Modal = props => {
  return (
    <Fader>
      {
        props.visible ? (
          <div key="modal" className="modal">
            <div className="modal-content">
              <h3 className="title">建立新資料夾</h3>
              <input className="input" type="text" />
              <button className="cancel" onClick={() => props.onCancelHandler && props.onCancelHandler()}>取消</button>
              <button className="confirm" onClick={() => props.onOkHandler && props.onOkHandler()}>建立</button>
            </div>
            <div className="overlay-boundary" onClick={() => props.onCancelHandler && props.onCancelHandler()}></div>
          </div>
        )
          : ""
      }
    </Fader>
  )
}

export default Modal