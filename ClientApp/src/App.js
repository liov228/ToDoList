import React, { useState } from 'react';
import './styles/App.css';
import TaskList from './components/TaskList';
import MyButton from './components/MyButton/MyButton';
import TaskForm from './components/TaskForm';
import MyModal from './components/MyModal/MyModal';
import TaskEditForm from  './components/TaskEditForm';
import { map } from 'jquery';


function App() {
    const [tasks, setTasks] = useState([
        { id: 0, title: 'Задача1', body: 'Описание1' },
        { id: 1, title: 'Задача2', body: 'Описание2' },
    ])

    const [modal, setModal] = useState(false);
    const [editmodal,seteditmodal ] = useState(false);
    const [edited, setedited] = useState(tasks[0]);

    const createTask = (newTaskData) => {
        newTaskData.id = tasks.length;
        setTasks([...tasks, newTaskData]);
    }
    const editTask = (task) => {
        seteditmodal(true)
        setedited(task)
    }

    const changeTaskData = (newData) => {
        setTasks(tasks.map((t) => {
            if (t.id == newData.id) {
                t = newData;
            }
            return t;
        }));
    }
    const removeTask = (task) => {
        setTasks(tasks.filter(p => p.id !== task.id))
    }

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>
                Создать
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <TaskForm create={createTask} />
            </MyModal>
            <MyModal visible={editmodal} setVisible={seteditmodal}>
                <TaskEditForm edited={edited} changeTaskData={changeTaskData} key={edited.id}/>
            </MyModal>

            <TaskList
            remove={removeTask}
            edit={editTask}
            tasks={tasks}
            title='Список задач' />

        </div>
    );
}

export default App;
