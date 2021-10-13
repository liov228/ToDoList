import React from 'react';


const TaskItem = (props) => {
    return (
        <div className="task" onClick={props.opentask}>
        <div className="task__content">
         <strong>{props.number} . {props.task.title}</strong>
              
       </div>
       
    </div>
    );
};

export default TaskItem;