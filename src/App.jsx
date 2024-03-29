import './App.css'

import { Route, Routes } from 'react-router-dom';

import RequireAuth from './components/auth/RequireAuth';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import CourseCreate from './Pages/Course/CourseCreate';
import CourseDescription from './Pages/Course/CourseDescription';
import CourseList from './Pages/Course/CourseList';
import DeniedPage from './Pages/DeniedPage';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import SignUp from './Pages/SignUp';
import Profile from './Pages/User/Profile';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/courses' element={<CourseList />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/denied' element={<DeniedPage />} />
        <Route path='/course/description' element={<CourseDescription />} />

        <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
          <Route path='/course/create' element={<CourseCreate />}/>
        </Route>
        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]}/>}>
          <Route path='/user/profile' element={<Profile />}/>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
