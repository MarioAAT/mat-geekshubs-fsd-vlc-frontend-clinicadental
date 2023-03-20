import { Route, Routes, Navigate } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { Home } from '../home/Home';
import { Login } from '../Login/Login';
import { Profile } from '../profile/Profile';
import { Register } from '../register/Register';

export const MainApp = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='*' element={<Navigate to="/"/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </>
  )
}
