import { useState, useEffect } from 'react';
import  { createContext } from 'react';
import { ReactNode } from 'react';
import { ITask } from './Index';

type formelm = React.FormEvent<HTMLFormElement>;
export const TaskContext = createContext<any>({});

export function TaskProvider ({ children }: {children: ReactNode}) {
    const [text, setText] = useState<string>('');
    const [day, setDay] = useState<string>('');
    const [reminder, setReminder] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [tasks, setTasks]= useState<ITask[]>([]);

    useEffect(()=> {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
       getTasks()
    }, [])
    const fetchTasks= async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data;
    }
    const fetchTask= async (id: number) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data;
    }


 const deleteTask = async (id: number) => {

        await fetch(`http://localhost:5000/tasks/${id}`,{
            method: 'DELETE',
        })
        setTasks(tasks.filter((task: ITask) => task.id !== id))
    }

    const toggleReminder = async (id: number) => {
        const taskToToggle = await fetchTask(id)
        const updTask = {...taskToToggle, reminder: !taskToToggle.reminder }

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method:'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })
        const data = await res.json 

        setTasks(tasks.map((task: any) => task.id === id ?
        {...task, reminder: data}: task))
    }


    const addTask = async (task: ITask) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify(task)
        })

        const data = await res.json()

        setTasks([...tasks, data])
    }


     function onSubmit(e: formelm )  {
        e.preventDefault()
        if(!text){
            alert('Please add a Task')
            return
        }

        addTask({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
        setOpen(false)
        
    }

    return (
        <TaskContext.Provider value={{ tasks, setTasks, text, setText, day, setDay, reminder, setReminder, open, setOpen, onSubmit, deleteTask, toggleReminder, addTask}}>
            {children}
        </TaskContext.Provider>
    );
}
