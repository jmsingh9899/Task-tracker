import { useContext } from 'react';
import { TaskContext } from './TasksContext';
import { FaTimes } from 'react-icons/fa';

const Task = (task: any) => {
    const time: any = useContext(TaskContext);
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => time.tasks.toggleReminder(task.id)}>
            <h3>
                {task.text}<FaTimes
                style={{color:'red', cursor: 'pointer'}}
                onClick={() => time.tasks.deleteTask(task.id)}
             
            /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
