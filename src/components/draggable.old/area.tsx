import * as React from 'react';

import Draggable from './draggable';
import DroppableArea from './droppable';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import { observer } from "mobx-react";

import { Transfer } from './helpers/transfer';

interface TransferProps {
    transfer: Transfer
}

@observer
class DragDropContextArea extends React.Component<any, {}> {

    renderDroppableAreaLists(mainWalletId, droppableAreaColor) {
        const { text, color, initialTokens, walletId } = this.props.transfer;
        
        let item = null;
        if (mainWalletId === walletId) {
            item = <Draggable {...this.props} />
        }

        return (
            <DroppableArea 
                color={droppableAreaColor} 
                text="@@@@@@@" 
                transfer={this.props.transfer}
                walletId={mainWalletId}>
                {item}
            </DroppableArea>
        )
    }

    render() {
        return <div style={{
            backgroundColor: 'antiquewhite',
            width: '100%',
            height: '600px',
            display: 'flex'
        }}>
            {this.renderDroppableAreaLists(1, 'red')}
            {this.renderDroppableAreaLists(2, 'green')}
            {this.renderDroppableAreaLists(3, 'yellow')}
            {this.renderDroppableAreaLists(4, 'blue')}

        </div>
    }

    // render() {
    //     return <div style={{
    //         backgroundColor: 'antiquewhite',
    //         width: '100%',
    //         height: '600px'
    //     }}>
    //         <Draggable transfer={this.props.transfer} />
    //         <DroppableArea transfer={this.props.transfer} color="red" bg="red" />
    //         <DroppableArea transfer={this.props.transfer} color="green" bg="green" />
    //         <DroppableArea transfer={this.props.transfer} color="yellow" bg="yellow" />
    //         <DroppableArea transfer={this.props.transfer} color="blue" bg="blue" />
    //     </div>
    // }
}

export default DragDropContext(HTML5Backend)(DragDropContextArea);