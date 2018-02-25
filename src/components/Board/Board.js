import React, { Component } from 'react';
import BoardItem from '../BoardItem/BoardItem.js';
import './Board.css';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="board">
                <div className="board-name" style={{backgroundColor: this.props.color}}>
                    {this.props.name}
                </div>
                <ul className="board-items">
                    {
                        this.props.items.map((item,i) => {
                           return <BoardItem name={item} key={i} moveItemLeft={this.props.moveItemLeft.bind(this,i)} moveItemRight={this.props.moveItemRight.bind(this,i)} boardLength={this.props.boardLength} boardIndex={this.props.boardIndex}/>
                        })
                    }
                </ul>
                <button onClick={this.props.addItem}>Add Item</button>
            </div>
        )
    }
}

export default Board;