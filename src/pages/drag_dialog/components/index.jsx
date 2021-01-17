import React from 'react'
import Drag from './drag'


class Toast extends React.Component {

    componentDidMount=() => {
        Drag.init("ant-modal-content").DragStart()
    }
    
    render() {
        return (
            <div>
                 我是一个可以拖拽的模式框！
            </div>
        )
    }
}

export default Toast