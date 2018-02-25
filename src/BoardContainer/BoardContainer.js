import React, { Component } from 'react';
import Board from '../Board/Board';
import './BoardContainer.css';

class BoardContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boards: [
                {
                    name: "Winnie",
                    color: "red",
                    list: [
                        "Do this.",
                        "this, too"
                    ]
                },
                {
                    name: "Bob",
                    color: "blue",
                    list: [
                        "Do this.",
                        "this, too"
                    ]
                },
                {
                    name: "Thomas",
                    color: "green",
                    list: [
                        "Do this.",
                        "this, too"
                    ]
                },
                {
                    name: "George",
                    color: "silver",
                    list: [
                        "Do this.",
                        "this, too"
                    ]
                }
            ]
        }
    }

    addItem(i,e) {
        let addNew = window.prompt();
        let newBoard = this.state.boards.slice();
        console.log(e,i);
        newBoard[i].list.push(addNew);
        this.setState({
            boards: newBoard
        })
    }

    moveItemLeft(index1,index2) {
        console.log(index1,index2)
        let newArr = this.state.boards.slice();
        let arrItem = newArr[index1].list[index2];
        newArr[index1].list.splice(index2, 1);
        newArr[index1-1].list.push(arrItem);
        this.setState({
            boards: newArr,
        })

    }

    moveItemRight(index1,index2) {
        console.log(index1,index2)
        let newArr = this.state.boards.slice();
        let arrItem = newArr[index1].list[index2];
        newArr[index1].list.splice(index2, 1);
        newArr[index1+1].list.push(arrItem);
        this.setState({
            boards: newArr,
        })

    }

    render() {
        return(
        <div className="board-wrapper">
            {
                this.state.boards.map((item,i) => {
                     return <Board loc={i} length={this.state.boards.length} color={item.color} name={item.name} moveItemLeft={this.moveItemLeft.bind(this,i)} moveItemRight={this.moveItemRight.bind(this,i)} list={item.list} key={i} addItem={this.addItem.bind(this,i)} />
                })
            }
        </div>
        )
    }
}

export default BoardContainer;