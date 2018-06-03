import * as React from 'react';

import Draggable from './draggable';
import DroppableArea from './droppable';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import { Transfer } from './helpers/transfer';

// interface TransferProps {
//     transfer: Transfer
// }

class DragDropContextArea extends React.Component<any, {}> {
    render() {
        return <div style={{
            backgroundColor: 'antiquewhite',
            width: '100%',
            height: '600px'
        }}>
            <Draggable/>
            <DroppableArea transfer={new Transfer()} />
            <DroppableArea/>
        </div>;
    }
}

export default DragDropContext(HTML5Backend)(DragDropContextArea);