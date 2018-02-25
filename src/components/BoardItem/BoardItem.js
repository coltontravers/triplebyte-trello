import React, { Component } from 'react';
import './BoardItem.css';

class BoardItem extends Component {
    constructor(props) {
        super(props);
    }

    arrowLeft() {
        if(this.props.boardIndex != 0) {
            return <div className="arrow-left" onClick={this.props.moveItemLeft}>{"<"}</div>
        }
    }

    arrowRight() {
        if(this.props.boardIndex != this.props.boardLength-1) {
            return <div className="arrow-right" onClick={this.props.moveItemRight}>{">"}</div>
        }
    }

    render() {
        return(
            <div className="board-item">
                {this.arrowLeft()}
                <div className="board-item-name">{this.props.name}</div>
                {this.arrowRight()}
            </div>
        )
    }
}

export default BoardItem;