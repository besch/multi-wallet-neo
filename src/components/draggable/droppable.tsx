import React, { Component } from 'react';
import { DropTarget, DropTargetSpec, DropTargetCollector, ConnectDropTarget } from "react-dnd";
import { TYPES } from './helpers/constants';

import { Transfer } from './helpers/transfer';

// interface props {
//     text: string;
//     connectDragSource(): any;
//     isDragging: boolean;
// }

interface TransferProps {
    transfer: Transfer,
    // connectDropTarget?(): any;
}

const dropTarget: DropTargetSpec<any> = {
    canDrop(props) {
        return props.transfer.canTransferTokens(props);
    },
    drop(props) {
        props.transfer.transferTokens(props);
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
        const { connectDropTarget } = this.props as any;
        return connectDropTarget(
            <div style={{
                width: 200,
                height: 600,
                backgroundColor: 'lightblue',
                margin: '20px',
                padding: '20px',
                border: '1px dashed black',
                display: 'inline-block'
            }}/>
        );
    }
}

export default DropTarget(TYPES.TOKEN_TRANSFER, dropTarget, collect)(DroppableArea);