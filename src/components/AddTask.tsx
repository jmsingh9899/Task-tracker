import { useState } from 'react';
import { useContext } from 'react';
import  {TaskContext}  from './TasksContext';
import 'semantic-ui-css/semantic.min.css';
import {Button,  Modal } from 'semantic-ui-react';


type formelm = React.FormEvent<HTMLFormElement>;

const AddTask = () => {
    const tasks: any = useContext(TaskContext)

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const [open, setOpen] = useState(false)


    async function onSubmit(e: formelm)  {
        e.preventDefault()
        if(!text){
            alert('Please add a Task')
            return
        }

        tasks.addTask({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
        setOpen(false)
        
    }


  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>New Task</Button>}
    >
      <Modal.Header>Add Task</Modal.Header>
      <Modal.Content >
          <form className='add-form' onSubmit={onSubmit}>
              <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' 
                value={text} onChange={(e) => setText(e.target.value)}/> 
              </div>
              <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & time'
                value={day} onChange={(e) => setDay(e.target.value)}/>  
              </div>
              <div className='form-control'>
                <label>Set Reminder</label>
                <input type='checkbox'
                checked={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)}/> 
              <input type='submit' value='Save Task'
              className='btn btn-block'/>
              </div>   
          </ form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default AddTask