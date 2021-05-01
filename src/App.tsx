import TaskHeader from './components/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';
import React, {useState} from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import  {TaskProvider}  from './components/TasksContext';
import { Container } from 'semantic-ui-react';
import Calendar from "./calendar";
import moment from "moment";






function App() {
  const [value, setValue] = useState(moment())

  return (
    <Router>
      <TaskProvider>
        <Container text >
        
        <TaskHeader />
        <Route path='/' exact render={() => (
          <>
          <AddTask />
         <Tasks  />
          </>
        ) }/>
        <Route path='/about' component={About} />
        <Footer />
        <Calendar value={value} onChange={setValue} />
        </Container>
      </TaskProvider>
    </Router>
  );
}

export default App;


