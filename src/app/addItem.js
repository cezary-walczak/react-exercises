import React from 'react'

var AddItem = React.createClass({
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="newItem" required />
                <input type="submit" value="Hit me" />
            </form>
        );
    },
    handleSubmit(e) {
        e.preventDefault()
        this.props.onAdd(this.refs.newItem.value)
    }
})

export default AddItem