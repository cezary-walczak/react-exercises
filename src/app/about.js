import React from 'react'
import {Link} from 'react-router'

var About = React.createClass({
    render() {
        return(
            <div>
                <Link to={'/'}>Home</Link>
                <h2>All about</h2>
            </div>
        )
    }
})

export default About