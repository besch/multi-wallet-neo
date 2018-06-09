import React, { Component } from 'react';
import { DropTarget, DropTargetSpec, DropTargetCollector, ConnectDropTarget } from "react-dnd";
import { TYPES } from './helpers/constants';

// interface props {
//     text: string;
//     connectDragSource(): any;
//     isDragging: boolean;
// }

interface DroppableAreaProps {
    connectDropTarget: ConnectDropTarget
    color: string
}

const dropTarget: DropTargetSpec<any> = {
    // canDrop(props) {
    //     // props.transfer.color === props.color;
    //     console.log('props----canDrop', props.color === 'blue', props)
    //     return props.color === 'blue';
    // },
    drop(props, monitor) {
        props.transfer.moveCard(props.walletId);
        // props.transfer.transferTokens(props);
    }
};

/**
 * Specifies the props to inject into your component.
 */
const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget()
    };
}

class DroppableArea extends Component<any, any> {
    render() {
        const { connectDropTarget, color } = this.props as any;
        return connectDropTarget(
            <div style={{
                width: 200,
                height: 200,
                backgroundColor: color,
                margin: '20px',
                padding: '20px',
                border: '1px dashed black',
                display: 'inline-block',
                opacity: .5
            }}>
                {this.props.children}
            </div>
        );
    }
}

export default DropTarget(TYPES.TOKEN_TRANSFER, dropTarget, collect)(DroppableArea);