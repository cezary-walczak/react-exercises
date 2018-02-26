import React from 'react'
import ReactDOM from 'react-dom'

var TodoComponent = React.createClass({
    render() {
        return(
            <div>
                <p>Ninja name: {this.props.ninja.name}</p>
                <p>Ninja age: {this.props.ninja.age}</p>
                <p>Ninja belt: {this.props.ninja.belt}</p>
            </div>
        )
    }
})
var Ninja = {name: 'Shaun', age: 27, belt: 'black'}

ReactDOM.render(<TodoComponent ninja={Ninja}/>, document.getElementById('app'))
