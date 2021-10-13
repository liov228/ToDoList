import React from 'react';
import './styles/App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            current: {id: -1, title: "", body: ""},
            isformvisible: true,
        };
    }
    loadTasks = async () => {
        fetch("todo")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        tasks: result,
                    });
                    console.log(result)
                },
                (error) => {
                    console.log(error);
                }
            )
    };

    createTask = (newTaskData) => {
        fetch('todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(newTaskData)
           
        })
            .then((response) => {
                this.loadTasks();
            })
            .catch(error => {
                console.log(error)
            })
            
    };

    
    shownewform = () => {
        this.setState({ isformvisible: true });
        this.setState({current: {id: -1, title: "", body: ""}})
    };

    changeTaskData = (newData) => {
        fetch('todo', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(newData)

        })
            .then((response) => {
                this.loadTasks();
            })
            .catch(error => {
                console.log(error)
            })
       
    };

    removeTask = (task) => {
        
        fetch('todo', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(task)

        })
            .then((response) => {
                this.loadTasks();
                this.setState({ current: { id: -1, title: "", body: "" } })
            })
            .catch(error => {
                console.log(error)
            })
    };

    componentDidMount() {
        this.loadTasks();
    };

    render() {
        return (
            <div className="App">
                <TaskList
                    shownewform={this.shownewform}
                    opentask={(task) => {
                        this.setState({ current: task })}}
                    tasks={this.state.tasks} />

                {this.state.isformvisible &&
                    <TaskForm create={this.createTask}
                              removetask={this.removeTask}
                              change={this.changeTaskData}
                              currenttask={this.state.current}
                              key={this.state.current.id}/>
                }
            </div>
        );
    }
}

export default App;
