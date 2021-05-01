import { useContext } from 'react';
import  {TaskContext}  from './TasksContext';
import Task from './Task';
import { List } from 'semantic-ui-react';
import { ITask } from './Index';

const Tasks = () => {
    const {tasks} = useContext(TaskContext);
    return (
        <List>
            {tasks.map((task: ITask) => (
            <Task key={task.id} task={task} />
            ))}
        </List >
    )
}

export default Tasks
