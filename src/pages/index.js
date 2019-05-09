import React, { Component } from "react"
import Button from '@material-ui/core/Button';
//import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//import {Link} from 'gatsby'

import HomeStyles from '../components/home.module.css'

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
})

class Home extends Component{
    state={
        email: 'domiciliary@gmail.com',
        password: 'password'
    }

    login = (e) =>{
        e.preventDefault()

        let user = {
            email:  e.target.email.value,
            password: e.target.password.value
        }
        e.target.email.value = ''
        e.target.password.value = ''
        console.log(user)
    }

    render(){
        const { classes } = this.props;

        return(
            <div className={HomeStyles.login}>
                <h1 className={HomeStyles.h1}>Domiciliary HealthCare</h1>
                
                <form onSubmit={this.login}
                    className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        name="email"
                        margin="normal"
                        variant="standard"
                        autoComplete="email"
                        fullWidth
                        required={true}
                        />
                     <TextField
                        id="outlined-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        name="password"
                        margin="normal"
                        variant="standard"
                        fullWidth
                        required={true}
                        />
                    <Button 
                        className={HomeStyles.button}
                        type='submit' 
                        variant='contained'
                        fullWidth 
                        color='primary'>Login</Button>
                </form>
            </div>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Home)
