import React from 'react'
import ReactDOM from 'react-dom'

var TodoComponent = React.createClass({
    getInitialState() {
        return {
            todos: ['wash up', 'eat something', 'take a nap']
        }
    },
    render() {
        return(
            <div>
                <ul>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                </ul>
                <ListComponent todos={this.state.todos}/>
            </div>
        )
    }
})

ReactDOM.render(<TodoComponent/>, document.getElementById('app'))
