import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/sign-in/login-form'
import TaskList from './components/all-Todos/allTodos'

import AddTodo from './components/add-todo/addTodo'
import DeletedTodos from './components/deleted-tasks/deletedTasks'
import SignupForm from './components/sign-up/signup-form'



function App() {
  return (
    <Routes>
      <Route path='/sign-in' element= {<LoginForm />}/> 
      <Route path='/sign-up' element= {<SignupForm />}/> 
      <Route path='/todos' element= {<TaskList />}/> 
      <Route path='/add-todo' element= {<AddTodo />}/> 
      <Route path='/deleted' element={<DeletedTodos />} />
    </Routes>
  )
}

export default App
