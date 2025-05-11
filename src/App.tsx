import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './components/landing/landingPage'
import UnauthorizedPage from './components/unAuthorized/unAuthorized'
import NotFound from './components/notFound/notFound'
import Guarded from './components/guarded/guarded'
import SignInScreen from './screens/SignIn.screens'
import SignUpScreen from './screens/signUp.screens'
import TasksScreen from './screens/tasks.screens'
import AddTaskScreen from './screens/addTask.screens'
import DeletedTasksScreen from './screens/deletedTasks'
import DashboardScreen from './screens/dashboard.screens'
import AlreadyLoggedScreen from './screens/alreadyLogged.screens'
import LoggedGuard from './components/guarded/loggedGuard'
import ContactScreen from './screens/contact.screens'



function App() {
  return (
    <Routes>
      <Route path='/' element= {<LandingPage />}/> 

      <Route path='/sign-in' element= {
        <LoggedGuard>
          <SignInScreen />
        </LoggedGuard>
      }/> 

      <Route path='/sign-up' element= {
        <LoggedGuard>
          <SignUpScreen />
        </LoggedGuard>
      }/>

      <Route path='/tasks' element= {
        <Guarded>
          <TasksScreen />
        </Guarded>
      }/> 

      <Route path='/add-task' element= {
          <Guarded>
            <AddTaskScreen />
          </Guarded>
      }/> 

      <Route path='/deleted-tasks' element={
          <Guarded>
            <DeletedTasksScreen />
          </Guarded>
        } 
      />

      <Route path='/tasks-dashboard' element={
          <Guarded>
            <DashboardScreen />
          </Guarded>
        }
      />

      {/* <Route path="/access-denied" element= {
          <UnauthorizedPage/>
        }
      />

      <Route path='/already-logged' element= {
        <Guarded>
          <AlreadyLoggedScreen />
        </Guarded>
      } /> */}

      <Route path='/contact-us' element= {
        <ContactScreen />
      } />
      <Route path="/*" element= {<NotFound/>}/>
    </Routes>
  )
}

export default App
