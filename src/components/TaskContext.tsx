import { createContext } from 'react'

const initialState = {
    text: "",
    day: "",
    reminder: false
};

export type TaskState = typeof initialState;

const TaskContext = createContext<typeof initialState>(initialState);

export default TaskContext