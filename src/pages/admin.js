import React, {Component} from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import AdminClient from '../components/AdminClient'

class Admin extends Component{
    render(){
        return(
            <div>
                <h1>Admin Page</h1>
                <Header 
                    title="Administrator" 
                    menu={['Client','Carer', 'Supervisor', 'Manager']}
                    pages={[AdminClient]}/>
                <Footer />
            </div>
        )
    }
}

export default Admin