import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/sign-in/login-form'
import TaskList from './components/allTodos/allTodos'



function App() {
  return (
    <Routes>
      <Route path='/sign-in' element= {<LoginForm/>}/> 
      <Route path='/' element= {<TaskList/>}/> 
    </Routes>
  )
}

export default App
