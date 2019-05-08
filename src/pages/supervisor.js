import React, {Component} from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

class Supervisor extends Component{
    render(){
        return(
            <div>
                <Header title='Supervisor' menu={['Clients','Carers', 'Supervisors', 'Managers' ]} />
                <Footer />
            </div>
        )
    }
}

export default Supervisor