import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/sign-in/login-form'
import TaskList from './components/all-Todos/allTodos'

import AddTodo from './components/add-todo/addTodo'



function App() {
  return (
    <Routes>
      <Route path='/sign-in' element= {<LoginForm/>}/> 
      <Route path='/' element= {<TaskList/>}/> 
      <Route path='/add-todo' element= {<AddTodo/>}/> 
    </Routes>
  )
}

export default App
