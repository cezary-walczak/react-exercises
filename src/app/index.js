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
                <TodoItem item={item} key={index}/>
            )
        })
        return(
            <div>
                <p>{this.state.age}</p>
                <ul>
                    {todos}
                </ul>
                {/* <ListComponent todos={this.state.todos}/> */}
            </div>
        )
    }
})

var TodoItem = React.createClass({
    render() {
        return(
            <li>
                <span className="item-name">{this.props.item}</span>
            </li>
        );
    }
})

ReactDOM.render(<TodoComponent/>, document.getElementById('app'))
