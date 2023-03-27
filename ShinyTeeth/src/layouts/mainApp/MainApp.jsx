import { Route, Routes, Navigate } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { GetAllUsers } from '../allUsers/AllUsers';
import { UserDetail } from '../userDetail/UserDetail'
import { Home } from '../home/Home';
import { Login } from '../Login/Login';
import { Profile } from '../profile/Profile';
import { Register } from '../register/Register';
import { AppointmentUser } from '../appointment/AppointmentUser';
import { CreateAppointment } from '../appointment/createAppointment';

export const MainApp = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/allUsers' element={<GetAllUsers/>}/>
        <Route path='/userdetail' element={<UserDetail/>}/>
        <Route path='/appointmentuser' element={<AppointmentUser/>}/>
        <Route path='/createappointment' element={<CreateAppointment/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
    </>
  )
}
