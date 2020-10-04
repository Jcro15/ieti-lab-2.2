import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import TodoApp from './components/TodoApp';
import {BrowserRouter as Router, Link, Route,Switch,withRouter} from 'react-router-dom'
import moment from "moment";
import axios from 'axios';










export class App extends Component {
    constructor(props) {
        super(props);
        this.state={items:[]}
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        fetch('https://ieti-task-api.azurewebsites.net/api/list-tasks?code=o3NwBCcXtzkB/8o3MKC9Ee6riGcs8fGHpFsAoZbg495ffoNSBhJZVg==')
            .then(response =>response.json())
            .then(data => {
                var tasksl=[]
                data.tasks.forEach(function (task) {
                    task.dueDate=moment(task.dueDate,'YYYY-MM-DD')
                    tasksl.push(task)    
                });
            this.setState({items: tasksl});
            
            });
    }
    
  

    

    render() {
        return (
            <div className="App">
            <TodoApp items={this.state.items} handleSubmit={this.handleSubmit}/>
            </div>
        );
        }
        handleSubmit(item) {
            axios.post('https://ieti-task-api.azurewebsites.net/api/add-task?code=6sVu4D3whQS5aYqhTLVkkcOZsLBLO20gQpnXocEvxzzbBCm0EKEvSw==',
                        { item }).then(res=> alert("ID :"+ res.data.id));
            this.setState(prevState => ({
                items: prevState.items.concat(item)
              }));
        }       

}