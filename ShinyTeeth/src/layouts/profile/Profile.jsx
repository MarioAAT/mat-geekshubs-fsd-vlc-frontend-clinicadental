import React, { useState, useEffect }  from 'react';
import { userData } from '../userSlice'; 
import { useSelector } from 'react-redux';
import { getUserData } from '../../services/apiCalls.js';

export const Profile = () => {
  const detailRedux = useSelector(userData);
  console.log(detailRedux.credentials)
    const [users, setUsers] = useState({
      firstname: '',
      middlename: '',
      lastname: '',
      mobilephone: '',
      email: ''
    }
        
    );

    console.log(detailRedux)

    useEffect(() => {
        if (users.name === "") {
        getUserData(detailRedux?.credentials?.token)
            .then((result) => {
            console.log(result.data, "hola soy yo");
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
        <div className=''>
          <div className='texto'>Name: </div>
          {users.firstname}
          <div className='texto'>Middle Name: </div>
          {detailRedux?.choosenObject?.middlename}
          <div className='texto'>Last Name: </div>
          {detailRedux?.choosenObject?.lastname}
          <div className='texto'>Mobile Phone: </div>
          {detailRedux?.choosenObject?.mobilephone}
          <div className='texto'>Email: </div>
          {detailRedux?.choosenObject?.email}
        </div>
      </>
    )
}