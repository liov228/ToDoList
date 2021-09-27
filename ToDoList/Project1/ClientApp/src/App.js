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

    setModal = (newModalState) => {
        this.setState({modal: newModalState})
    }

    setEditModal = (newModalState) => {
        this.setState({editModal: newModalState})
    }

    createTask = (newTaskData) => {
        newTaskData.id = this.state.tasks[this.state.tasks.length - 1].id + 1;
        this.setState({tasks: [...this.state.tasks, newTaskData]});
    }

    editTask = (task) => {
        this.setState({editModal: true});
        this.setState({edited: task});
    }

    changeTaskData = (newData) => {
        let new_tasks = this.state.tasks.map((t) => {
            if (t.id === newData.id) {
                t = newData;
            }
            return t;
        })
        this.setState({tasks: new_tasks})
    }

    removeTask = (task) => {
        this.setState({tasks: this.state.tasks.filter(p => p.id !== task.id)});
    }

    componentDidMount() {
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
