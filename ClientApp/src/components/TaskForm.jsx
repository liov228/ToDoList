import React,{useState} from 'react';
import MyButton from './MyButton/MyButton';
import MyInput from './input/MyInput';

const TaskForm=({create})=>{
    const[task,setTask]=useState({title:'',body:''})
    
  const addNewTask=(e)=>{
    e.preventDefault()
    const newTask={
        ...task
    }
    create(newTask)
    setTask({title:'',body:''})
  }
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
        <MyButton onClick={addNewTask}>Создать задачу</MyButton>
        </form>)    
}      
export default TaskForm;