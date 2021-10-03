import React from 'react';
import './styles/App.css';
import TaskList from './components/TaskList';
import MyButton from './components/MyButton/MyButton';
import TaskForm from './components/TaskForm';
import MyModal from './components/MyModal/MyModal';
import TaskEditForm from  './components/TaskEditForm';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            modal: false,
            editModal: false,
            edited: 0,
        };
    }
    loadTasks = async () => {
        fetch("weatherforecast")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        tasks: result,
                    });
                },
                (error) => {
                    console.log(error);
                }
            )
    };

    setModal = (newModalState) => {
        this.setState({modal: newModalState})
    }

    setEditModal = (newModalState) => {
        this.setState({editModal: newModalState})
    }

    createTask = (newTaskData) => {
        fetch('weatherforecast', {
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
            
    }

    editTask = (task) => {
        this.setState({editModal: true});
        this.setState({edited: task});
    }

    changeTaskData = (newData) => {
        fetch('weatherforecast', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(newData)

        })
            .catch(error => {
                console.log(error)
            })
        this.loadTasks();
    }

    removeTask = (task) => {
        
        fetch('weatherforecast', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(task)

        })
            .then((response) => {
                this.loadTasks();
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.loadTasks();
      }

    render() {
        return (
            <div className="App">
                <MyButton onClick={() => this.setState({modal: true})}>
                    Создать
                </MyButton>
                <MyModal visible={this.state.modal} setVisible={this.setModal}>
                    <TaskForm create={this.createTask} />
                </MyModal>
                <MyModal visible={this.state.editModal} setVisible={this.setEditModal}>
                    <TaskEditForm edited={this.state.edited} changeTaskData={this.changeTaskData} key={this.state.edited.id}/>
                </MyModal>

                <TaskList
                remove={this.removeTask}
                edit={this.editTask}
                tasks={this.state.tasks}
                title='Список задач' />

            </div>
        );
    }
}

export default App;
