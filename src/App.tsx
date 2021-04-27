import TaskHeader from './components/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';
import React from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import  {TaskProvider}  from './components/TasksContext';
import { Container } from 'semantic-ui-react';






function App() {

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
        </Container>
      </TaskProvider>
    </Router>
  );
}

export default App;


