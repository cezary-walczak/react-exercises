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
        var ager = setTimeout(() => {
            this.setState({
                age: 35
            })
        }, 3000)
        return(
            <div>
                <p>{this.state.age}</p>
                <ul>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                </ul>
                {/* <ListComponent todos={this.state.todos}/> */}
            </div>
        )
    }
})

ReactDOM.render(<TodoComponent/>, document.getElementById('app'))
