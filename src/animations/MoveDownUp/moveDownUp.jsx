import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group';
import './index.scss'
const MoveDownUp = ({ children }) => (
    <CSSTransitionGroup
        transitionName='move-down-up'
        transitionAppear={true}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={800}
    >
        {children}
    </CSSTransitionGroup>
)

export default MoveDownUp