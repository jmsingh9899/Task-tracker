import { useContext } from 'react';
import  {TaskContext}  from './TasksContext';
import Task from './Task';
import { List } from 'semantic-ui-react';

const Tasks = () => {
    const time: any = useContext(TaskContext);
    return (
        <List>
            {time.tasks.map((task: [{text: string, day: string, reminder:boolean, id: number}]) => (
            <Task  task={task} />
            ))}
        </List >
    )
}

export default Tasks
