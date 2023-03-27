import React, { useState, useEffect }  from 'react';
import { userData } from '../userSlice'; 
import { useSelector } from 'react-redux';
import { getUserData } from '../../services/apiCalls.js';

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

    console.log('jdjgfhdjgfhdj',detailRedux)

    useEffect(() => {
        if (users.firstname === "") {
        getUserData(detailRedux?.credentials?.token)
            .then((result) => {
            console.log(result.data);
            setUsers({
              patientId: result.data.user.patient_id,
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
    console.log('holajdhfhhgf', users);

    return (
      <>
        <div className=''>
        <div className='texto'>PatientId: </div>
          {users.patientId}
          <div className='texto'>Name: </div>
          {users.firstname}
          <div className='texto'>Middle Name: </div>
          {users.middlename}
          <div className='texto'>Last Name: </div>
          {users.lastname}
          <div className='texto'>Mobile Phone: </div>
          { users.mobilephone}
          <div className='texto'>Email: </div>
          {users.email}
        </div>
      </>
    )
}