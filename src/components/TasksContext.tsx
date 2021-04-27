import { useState, useEffect } from 'react';
import  { createContext } from 'react';

export const TaskContext = createContext(undefined);

export const TaskProvider = ({ children }: any) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    const [open, setOpen] = useState(false);
    const [tasks, setTasks]= useState<object[]>([]);

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
        setTasks(tasks.filter((task: any) => task.id !== id))
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


    const addTask = async (task: any) => {
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


     function onSubmit(e: any)  {
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
        <TaskContext.Provider value={{tasks, setTasks, text, setText, day, setDay, reminder, setReminder, open, setOpen, onSubmit, deleteTask, toggleReminder, addTask}}>
            {children}
        </TaskContext.Provider>
    );
}
