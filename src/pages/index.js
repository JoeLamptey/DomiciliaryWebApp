import React, { Component } from "react"
import Button from '@material-ui/core/Button';
import {Link} from 'gatsby'

class Home extends Component{
    render(){
        return(
            <div>
                <h2>Welcome to Domiciliary Care</h2>
                <Link to='/admin'><Button variant='contained' color='primary'>Signin</Button></Link>
            </div>
        )
    }
}
export default Home
