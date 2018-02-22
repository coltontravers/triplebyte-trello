import React, { Component } from 'react';
import BoardItem from '../BoardItem/BoardItem.js';
import './Board.css';


class Board extends Component {
    constructor(props) {
        super(props)
    }

    addItem() {
        let promptVar = window.prompt();
        console.log(promptVar);
        let newArr = this.state.items.slice();
        newArr.push(promptVar);
        console.log(newArr);
        this.setState({
            items: newArr,
        })
    }

    render() {
        return(
            <div className="Board">
                <div className={"board-name "+this.props.color}>
                {this.props.name}
                </div>
                {
                    this.props.list.map((item,i) => {
                        // return <BoardItem name={item} key={i} moveItemLeft={this.props.moveItemLeft.bind(this,i)} moveItemRight={this.props.moveItemRight.bind(this,i)}/>;
                        return <BoardItem loc={this.props.loc} boardLength={this.props.length} name={item} length={this.props.list.length} key={i} moveItemLeft={this.props.moveItemLeft.bind(this,i)} moveItemRight={this.props.moveItemRight.bind(this,i)}/>;
                    })
                }
                <button onClick={this.props.addItem}>Add Item</button>
            </div>
        )
    }
}

export default Board;