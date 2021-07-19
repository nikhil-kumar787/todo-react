import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { NotificationManager } from 'react-notifications';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        margin: theme.spacing(1),
    },
});


class AddTodo extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            category: '',
            loading: false,

        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = async e => {
        e.preventDefault();
        e.stopPropagation()

        this.setState({ loading: true })
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000)
        // const data = {
        //     email: this.state.email,
        //     password: this.state.password

        // };
        const { title, category } = this.state;
        const userid = localStorage.getItem('userId')
        console.log(userid)

     await   axios
            .post('https://todo-rest-b.herokuapp.com/todo/addtodo', { title, category, userid })
            .then(res => {
                console.log(res)
                this.setState({
                    title: '',
                    category: '',
                })
                console.log("hello")
                NotificationManager.success('Todo Added Successfully!', " ", 2000);
                this.props.history.push('/login');
                
            })
            .catch(err => {

                // NotificationManager.error('Error while Creating Todo!', 'Error!');
                
            })
    }





    render() {
        const { classes } = this.props;
        return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={this.onSubmit}>
            <div>
                <TextField required id="standard-required" label="Title" name="title"

                    value={this.state.title}
                    onChange={this.onChange} />
                <TextField required id="standard-required" label="Category" name="category"

                    value={this.state.category}
                    onChange={this.onChange} />
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    onClick={this.onSubmit}
                   
                >
                    Save
                </Button>

            </div>
        </form>



        )

    }

}
export default withStyles(styles, { withTheme: true })(AddTodo);