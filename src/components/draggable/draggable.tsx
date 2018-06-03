import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
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
            text: props.text
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

class Draggable extends Component {
    render() {
        const { isDragging, connectDragSource, text } = this.props as any;
        return connectDragSource(
            <div style={{ 
                opacity: isDragging ? 0.5 : 1, 
                width: 100, 
                height: 100, 
                backgroundColor: 'yellow',
                display: 'inline-block',
                border: '1px solid black'
            }}>
                {text}
            </div>
        );
    }
}

export default DragSource(TYPES.TOKEN_TRANSFER, cardSource, collect)(Draggable);