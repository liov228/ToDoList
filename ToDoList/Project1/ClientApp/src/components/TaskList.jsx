import React from 'react';
import MyButton from './MyButton/MyButton';
import TaskItem from './TaskItem';

const TaskList = ({ opentask, shownewform, tasks}) => {
    return(
        <div className="tasklist">
        { 
            tasks.map((task,index)=>
                <TaskItem opentask={() => {opentask(task)}} 
                number={index+1}
                task={task}
                key={task.id}/>
            )
        }
        <MyButton onClick={shownewform}>Добавить</MyButton>
    </div>
    );
};
export default TaskList;