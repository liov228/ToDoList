import React, { useState } from 'react';
import MyButton from './MyButton/MyButton';
import MyInput from './input/MyInput';

const TaskForm = ({ create, change, currenttask, removetask }) => {
    const [task, setTask] = useState({ title: currenttask.title, body: currenttask.body, startDate: currenttask.startDate, endDate: currenttask.endDate });
    const [readOnly, setReadOnly] = useState(currenttask.id !== -1);

    const addNewTask = (e) => {
        e.preventDefault()
        const newTask = {
            ...task
        }
        create(newTask)
        setTask({ title: '', body: '' })
    };

    const commitChanges = (e) => {
        e.preventDefault()
        const newTask = {
            ...task,
            id: currenttask.id
        };
        change(newTask);

    };
    const remove = (e) => {
        e.preventDefault()
        removetask(currenttask);

    };

    return (
        <form>
            <p>Название</p>
            <MyInput
                value={task.title}
                onChange={e => setTask({ ...task, title: e.target.value })}
                type='text'
                placeholder='Название'
                disabled={readOnly}
            />
            <p>Описание</p>
            <MyInput
                value={task.body}
                onChange={e => setTask({ ...task, body: e.target.value })}
                type="text"
                placeholder="описание"
                disabled={readOnly}
            />
            <p>Дата начала</p>
            <MyInput
                value={task.startDate}
                onChange={e => setTask({ ...task, startDate: e.target.value })}
                type="text"
                defaultValue={new Date().toISOString().substr(0, 10)}
                placeholder="гггг-мм-дд"
                disabled={readOnly}
            />
            <p>Дата окончания</p>
            <MyInput
                value={task.endDate}
                onChange={e => setTask({ ...task, endDate: e.target.value })}
                type="text"
                placeholder="гггг-мм-дд"
                disabled={readOnly}
            />

            {(currenttask.id === -1)
                ? <MyButton onClick={addNewTask}>Создать задачу</MyButton>
                : <><MyButton onClick={commitChanges}>Сохранить изменения</MyButton><MyButton onClick={remove}>Удалить</MyButton><MyButton onClick={(e) => { e.preventDefault(); setReadOnly(false); }}>Изменить</MyButton></>

            }
        </form>
    )
}
export default TaskForm;