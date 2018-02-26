import React from 'react'
import ReactDOM from 'react-dom'
import { link } from 'fs';

var TodoComponent = React.createClass({
    getInitialState() {
        return {
            todos: ['wash up', 'eat something', 'take a nap'],
            age: 30
        }
    },
    render() {
        var todos = this.state.todos
        todos = todos.map((item, index) => {
            return(
                <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            )
        })
        return(
            <div>
                <ul>
                    {todos}
                </ul>
                {/* <ListComponent todos={this.state.todos}/> */}
            </div>
        )
    },
    clicked() {
        console.log('You clicked me')
    },
    onDelete(item) {
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    }
})

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

ReactDOM.render(<TodoComponent/>, document.getElementById('app'))