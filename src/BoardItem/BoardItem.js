import React, { Component } from 'react';
import './BoardItem.css';

class BoardItem extends Component {
    constructor(props) {
        super(props)
    }

    renderLeftArrow() {
        if(this.props.loc != 0) {
            return (
                <div className="arrow-left" onClick={this.props.moveItemLeft}>
                    {"<"}
                </div>
            )
        }
    }

    renderRightArrow() {
        if((this.props.loc+1) != this.props.boardLength) {
            return (
                <div className="arrow-right" onClick={this.props.moveItemRight}>
                    {">"}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="board-item">
            {

            }
                {this.renderLeftArrow()}
                <div className="name">
                    {this.props.name}
                </div>
                {this.renderRightArrow()}
            </div>
        )
    }
}

export default BoardItem;