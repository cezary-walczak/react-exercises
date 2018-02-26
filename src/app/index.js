import React from 'react'
import ReactDOM from 'react-dom'

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
                <li>{item}</li>
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

ReactDOM.render(<TodoComponent/>, document.getElementById('app'))
