import React,{useState} from 'react';
import MyButton from './MyButton/MyButton';
import MyInput from './input/MyInput';

const TaskEditForm = ({ edited, changeTaskData }) => {
    const [task, setTask] = useState({ title: edited.title, body: edited.body });


    const commitEdit = function (e) {
        e.preventDefault()
        changeTaskData({ id: edited.id, title: task.title, body: task.body })
    };

    return(
    <form>
        <MyInput
        value={task.title}
        onChange={e=>setTask({...task,title:e.target.value})}
        type='text' 
        placeholder='создать задачу'
        />
        <MyInput
        value={task.body}
        onChange={e=>setTask({...task,body:e.target.value})}
        type="text" 
        placeholder="описание"
        />
        <MyButton onClick={commitEdit}>Изменить задачу</MyButton>
    </form>)    
}      
export default TaskEditForm;