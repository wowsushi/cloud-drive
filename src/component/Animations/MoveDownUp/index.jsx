import React from './node_modules/react'
import { CSSTransitionGroup } from './node_modules/react-transition-group';
import './style.scss'
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