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
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { NotificationManager } from 'react-notifications';
import { CircularProgress } from '@material-ui/core';

import axios from 'axios';



const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(100),
            height: theme.spacing(60),
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
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loading: false
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000)
        // const data = {
        //     email: this.state.email,
        //     password: this.state.password

        // };
        const { email, password } = this.state;

        axios
            .post('http://localhost:5000/register', { email, password })
            .then(res => {
                this.setState({
                    email: '',
                    password: '',
                })
                this.props.history.push('/forward');
                NotificationManager.success('User Registered Successfully!'," ", 2000);
            })
            .catch(err => {

                NotificationManager.error('Error while Creating new User!', 'Error!');
            })
    }
    




    render() {
        const { classes } = this.props;
        function Copyright() {
            return (
                <Typography variant="body2" color="inherit" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="/">
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
                                <PersonAddIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                            <form className={classes.form} noValidate onSubmit={this.onSubmit}>
                                <Grid container spacing={2}>
                                    {/* <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid> */}
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="filled"
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
                                            variant="filled"
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
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={this.onSubmit} disabled={loading}
                                   
                                >
                                     {loading && <CircularProgress size={14} />}
                                    {!loading && 'Sign up'}
                                </Button>
                              
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            Already have an account? Sign in
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
export default withStyles(styles, { withTheme: true })(SignUp);