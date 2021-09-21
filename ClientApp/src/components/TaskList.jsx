import React from 'react';
import TaskItem from './TaskItem';

const TaskList=({remove,edit,tasks,title})=>{
    return(
        <div>
        <h1 style={{textAlign:'center'}}>
        {title}
        </h1>
      {tasks.map((task,index)=>
          <TaskItem remove={remove} edit={edit} number={index+1} task={task} key={task.id}/>
      )
      }
    </div>
    );
};
export default TaskList;