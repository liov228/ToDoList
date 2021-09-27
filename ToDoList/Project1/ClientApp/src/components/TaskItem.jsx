import React from 'react';
import MyButton from './MyButton/MyButton';


const TaskItem = (props) => {
    return (
        <div className="task">
        <div className="task__content">
         <strong>{props.number} . {props.task.title}</strong>
                <div>
                    {props.task.body}
                </div>
       </div>
       <div className='task__btns'>
         <MyButton onClick={() => props.edit(props.task)}>Изменить</MyButton>
         <MyButton onClick={()=>props.remove(props.task)}>Удалить</MyButton>  
       </div>
    </div>
    );
};

export default TaskItem;