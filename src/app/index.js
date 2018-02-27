import React from 'react'
import ReactDOM from 'react-dom'
import indexStyle from '../css/index.css'

import TodoItem from './todoItem'
import AddItem from './addItem'

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
                <AddItem onAdd={this.onAdd}/>
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
    },
    onAdd(item) {
        var updatedTodos = this.state.todos
        updatedTodos.push(item)
        this.setState({
            todos: updatedTodos
        });
    },
    componentWillMount() {
        console.log('componentWillMount')
    },
    componentDidMount() {
        console.log('componentDidMount') // grabbing external data
    },
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
})

ReactDOM.render(<TodoComponent/>, document.getElementById('app'))