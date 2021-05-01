
export interface ITask {
    text?: string;
    day?: string;
    reminder?: boolean; 
    id?: number;
}

export type formelm = React.FormEvent<HTMLFormElement>