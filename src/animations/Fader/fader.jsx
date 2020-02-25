import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group';
import './index.scss'
const Fader = ({ children }) => (
    <CSSTransitionGroup
        transitionName='fade'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
    >
        {children}
    </CSSTransitionGroup>
)

export default Fader