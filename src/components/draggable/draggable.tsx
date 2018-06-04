import React, { Component } from 'react';
import { DragSource, ConnectDragSource } from 'react-dnd';
import { TYPES } from './helpers/constants';

interface props {
    text: string;
    connectDragSource(): any;
    isDragging: boolean;
}

/**
 * Implements the drag source contract.
 */
const cardSource = {
    beginDrag(props) {
        console.log('props', props)
        return {
            text: props.text,
            cardId: 1
        };
    }
};

/**
 * Specifies the props to inject into your component.
 */
const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

interface IDraggableProps {
    connectDragSource: ConnectDragSource,
    isDragging: boolean
    transfer: {
        color: string,
        initialTokens: number
        text: string
    }
}

class Draggable extends Component<IDraggableProps, {}>{
    render() {
        const { isDragging, connectDragSource } = this.props;
        const { text, color, initialTokens } = this.props.transfer;
        return connectDragSource(
            <div style={{ 
                opacity: isDragging ? 0.5 : 1, 
                width: 100, 
                height: 100, 
                backgroundColor: 'yellow',
                display: 'inline-block',
                border: '1px solid black'
            }}>
                <p>Text: {text}</p>
                <p>Color: {color}</p>
                <p>InitialTokens: {initialTokens}</p>
            </div>
        );
    }
}

export default DragSource(TYPES.TOKEN_TRANSFER, cardSource, collect)(Draggable);