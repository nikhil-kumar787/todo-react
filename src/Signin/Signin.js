import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { NotificationManager } from 'react-notifications';
import { CircularProgress } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import axios from 'axios';



const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(60),
            height: theme.spacing(55),
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Signin extends Component {
    

    constructor() {
        super();
        let loggedIn = false;
        this.state = {
            email: '',
            password: '',
            loading: false,
            loggedIn,
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

     onSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000)
        // const data = {
        //     email: this.state.email,
        //     password: this.state.password

        // };
        let usertoken
        let userid 
        const { email, password } = this.state;

         await axios
            .post('https://todo-rest-b.herokuapp.com/login', { email, password })
            .then(res => {
                 usertoken = res.data.token;
                 userid = res.data.userid;
                // console.log(res.data.token)
                this.setState({

                    loggedIn: true,
                })
                NotificationManager.success('Login Successful!', '', 2000);
                this.props.history.push('/home');
                
            })
            .catch(err => {

                NotificationManager.error('Please check your email and password!');
            })
            // console.log(token)
            // this.setState({
            //     loggedIn: true,
            //   });
           console.log(userid)
            localStorage.setItem("token", usertoken);
            localStorage.setItem("userId", userid);
    }





    render() {
        const { classes } = this.props;
        function Copyright() {
            return (
                <Typography variant="body1" color="inherit" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://material-ui.com/">
                        Todo App
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            );
        }

        const { loading } = this.state



        return (

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.root}>
                    <Paper elevation={3} >
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <AccountCircleIcon  />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <form className={classes.form} noValidate onSubmit={this.onSubmit}>
                                <Grid container spacing={2}>
                                 
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                        />
                                    </Grid>

                                </Grid>
                                <Button
                                    type="submit"
                                    
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={this.onSubmit} disabled={loading}

                                >
                                    {loading && <CircularProgress size={30} />}
                                    {!loading && 'Sign in'}
                                </Button>

                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="/" variant="body2">
                                            Don't have an account? <Button variant="contained" color="primary" href="/">
                                                Sign Up
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Paper>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        )

    }

}
export default withStyles(styles, { withTheme: true })(Signin);