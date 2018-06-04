import React, { Component } from 'react';
import { DropTarget, DropTargetSpec, DropTargetCollector, ConnectDropTarget } from "react-dnd";
import { TYPES } from './helpers/constants';

import { Transfer } from './helpers/transfer';

// interface props {
//     text: string;
//     connectDragSource(): any;
//     isDragging: boolean;
// }

interface DroppableAreaProps {
    transfer: Transfer,
    connectDropTarget: ConnectDropTarget
    bg: string
}

const dropTarget: DropTargetSpec<any> = {
    // canDrop(props) {
    //     // props.transfer.color === props.color;
    //     console.log('props----canDrop', props.color === 'blue', props)
    //     return props.color === 'blue';
    // },
    drop(props) {
        console.log('drop ----- text', props.text)
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
        const { connectDropTarget, bg } = this.props as any;
        return connectDropTarget(
            <div style={{
                width: 200,
                height: 600,
                backgroundColor: bg,
                margin: '20px',
                padding: '20px',
                border: '1px dashed black',
                display: 'inline-block'
            }}/>
        );
    }
}

export default DropTarget(TYPES.TOKEN_TRANSFER, dropTarget, collect)(DroppableArea);