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

    renderDroppableAreaLists(color) {
        console.log('renderDroppableAreaLists', this.props)
        
        let item = null;
        if (this.props.color === color) {
            item = <Draggable/>
        }

        return (
            <div style={{
                backgroundColor: color,
                width: '100px',
                height: '200px'
            }}>
                <DroppableArea 
                    transfer={this.props.transfer} 
                    color="blue" 
                    bg="blue">
                </DroppableArea>
            </div>
        )
    }

    render() {
        return <div style={{
            backgroundColor: 'antiquewhite',
            width: '100%',
            height: '600px',
            display: 'flex'
        }}>
            {this.renderDroppableAreaLists('red')}
            {this.renderDroppableAreaLists('green')}
            {this.renderDroppableAreaLists('yellow')}
            {this.renderDroppableAreaLists('blue')}

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