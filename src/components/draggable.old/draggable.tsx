import React, { Component } from 'react';
import { DragSource, ConnectDragSource } from 'react-dnd';
import { TYPES } from './helpers/constants';

interface props {
    text: string;
    color: string;
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
            color: props.color,
            walletId: props.walletId
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
        text: string,
        walletId: number,
    }
}

class Draggable extends Component<IDraggableProps, {}>{
    render() {
        const { isDragging, connectDragSource } = this.props;
        const paragraphStyle = {
            margin: 0,
            fontSize: '12px'
        }
        // console.log('------------', this.props);
        
        const { text, color, initialTokens, walletId } = this.props.transfer;
        // console.log('transfer', text, color, initialTokens)
        return connectDragSource(
            <div style={{ 
                    opacity: isDragging ? 0.5 : 1, 
                    width: 100, 
                    height: 60,
                    backgroundColor: 'yellow',
                    display: 'inline-block',
                    border: '1px solid black'
                }}
                className="draggable">
                <p style={paragraphStyle}>Wallet id: {walletId}</p>
                <p style={paragraphStyle}>Text: {text}</p>
                <p style={paragraphStyle}>Color: {color}</p>
                <p style={paragraphStyle}>InitialTokens: {initialTokens}</p>
            </div>
        );
    }
}

export default DragSource(TYPES.TOKEN_TRANSFER, cardSource, collect)(Draggable);