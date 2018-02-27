import React from 'react'
import todoItemStyle from '../css/todoItem.css'

var TodoItem = React.createClass({
    render() {
        return(
            <li>
                <span className="item-name">{this.props.item}</span>
                <span className="item-delete" onClick={this.handleDelete}> x </span>
            </li>
        );
    },
    handleDelete() {
        this.props.onDelete(this.props.item)
    }
})

export default TodoItem