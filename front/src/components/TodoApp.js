import React, {Component} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import AddIcon from '@material-ui/icons/Add';
import { withStyles} from '@material-ui/core/styles';
import { Fab, Modal } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DialogContent from '@material-ui/core/DialogContent';
import NewTask from './NewTask'





const useStyles =theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      fab2: {
        position: 'fixed',
        bottom: theme.spacing(10),
        right: theme.spacing(2),
      }
})


 class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {open:false};
        this.handleModal=this.handleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

        
    }


    render() {
        const { classes } = this.props;
        return (
            <div className="App">
                <br/>
                <br/>
                <TodoList todoList={this.props.items}/>
                <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleModal}>
                <AddIcon />
                </Fab> 
                <Modal open={this.state.open}
                onClose={this.handleModal}
                >
                <NewTask handleSubmit={this.handleSubmit}/>
                </Modal>

            </div>
        );
    }

    

    handleModal(){
        this.setState(prevstate=>({
            open: !prevstate.open
        }))
    }
    handleSubmit(task){
        this.handleModal()
        this.props.handleSubmit(task);
    }

    
    
    

}
export default withStyles(useStyles, { withTheme: true })(TodoApp);


