import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, Link} from 'react-router'
import indexStyle from '../css/index.css'

import TodoItem from './todoItem'
import AddItem from './addItem'
import About from './about'

var App = React.createClass({
    render() {
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        )
    }
})

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
                <Link to={'/about'}>About</Link>
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

ReactDOM.render(<App/>, document.getElementById('app'))