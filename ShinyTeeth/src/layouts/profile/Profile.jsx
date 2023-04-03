import React, { useState, useEffect }  from 'react';
import { userData } from '../userSlice'; 
import { useSelector } from 'react-redux';
import { getUserData } from '../../services/apiCalls.js';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

export const Profile = () => {
  const detailRedux = useSelector(userData);
    const [users, setUsers] = useState({
      firstname: '',
      middlename: '',
      lastname: '',
      mobilephone: '',
      email: ''
    }
        
    );

    useEffect(() => {
        if (users.firstname === "") {
        getUserData(detailRedux?.credentials?.token)
            .then((result) => {
            setUsers({
              firstname: result.data.user.first_name,
              middlename: result.data.user.middle_name,
              lastname: result.data.user.last_name,
              mobilephone: result.data.user.mobile_phone,
              email: result.data.user.email
            });
            })
            .catch((error) => console.log(error));
        }
    }, [users]);

    return (
      <>
      <div className='allUsersDesigne'>
        <div><h1>Profile</h1></div>
          <div className='usersbox'>
            <div className='texto'>Name </div>
            {users.firstname}
            <div className='texto'>Middle Name </div>
            {users.middlename}
            <div className='texto'>Last Name </div>
            {users.lastname}
            <div className='texto'>Mobile Phone </div>
            { users.mobilephone}
            <div className='texto'>Email </div>
            {users.email}
          </div>
          <Button as={Link} to={'/putprofile'} >Edit Profile</Button>
      </div>
      </>
    )
}