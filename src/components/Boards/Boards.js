import React, { Component } from 'react';
import Board from '../Board/Board.js';
import './Boards.css';

class Boards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: [
                {
                    name: "Board 1",
                    color: "red",
                    items: [
                        "Todo item 1",
                        "Todo item 2",
                    ]
                },
                {
                    name: "Board 2",
                    color: "blue",
                    items: [
                        "Todo item 3",
                        "Todo item 4",
                    ]
                },
                {
                    name: "Board 3",
                    color: "yellow",
                    items: [
                        "Todo item 5",
                        "Todo item 6",
                    ]
                }
            ]
        }
    }

    addItem(boardIndex) {
        let item = window.prompt();
        console.log(item);
        let newArr = this.state.boards.slice();
        newArr[boardIndex].items.push(item);
        this.setState({
            boards: newArr,
        })
    }

    moveItemRight(boardIndex, listIndex) {
        let newArr = this.state.boards.slice();
        let item = newArr[boardIndex].items.splice(listIndex, 1)[0];
        newArr[boardIndex+1].items.push(item);
        this.setState({
            boards: newArr,
        })
    }

    moveItemLeft(boardIndex, listIndex) {
        let newArr = this.state.boards.slice();
        let item = newArr[boardIndex].items.splice(listIndex, 1)[0];
        newArr[boardIndex-1].items.push(item);
        this.setState({
            boards: newArr,
        })
    }

    render() {
        return (
        <div className="boards">
            {
                this.state.boards.map((item,i) => {
                    return <Board name={item.name} color={item.color} items={item.items} addItem={this.addItem.bind(this,i)} moveItemLeft={this.moveItemLeft.bind(this,i)} moveItemRight={this.moveItemRight.bind(this,i)} key={i} boardIndex={i} boardLength={this.state.boards.length}/>
                })
            }
        </div>
        )
    }
}

export default Boards;