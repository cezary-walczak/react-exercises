import React from 'react'
import ReactDOM from 'react-dom'

var TodoComponent = React.createClass({
    render() {
        return(
            <h1>Hello!</h1>
        )
    }
})

ReactDOM.render(<TodoComponent />, document.getElementById('app'))
