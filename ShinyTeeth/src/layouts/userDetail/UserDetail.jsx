import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { detailData } from '../detailSlice';
import StyleUserDetail from '../userDetail/StyleUserDetail.css' 

export const UserDetail = () => {

  const detailRedux = useSelector(detailData);

  useEffect(()=>{
      console.log(detailRedux,"patata")
  },[])



  return (
    <>
    <div className='allUsersDesigne'>
    <div><h1>User Detail</h1></div>
    <div className='usersbox'>
      <div className='texto'>Name: </div>
      {detailRedux?.choosenObject?.first_name}
      <div className='texto'>Middle Name: </div>
      {detailRedux?.choosenObject?.middle_name}
      <div className='texto'>Last Name: </div>
      {detailRedux?.choosenObject?.last_name}
      <div className='texto'>Mobile Phone: </div>
      {detailRedux?.choosenObject?.mobile_phone}
      <div className='texto'>Email: </div>
      {detailRedux?.choosenObject?.email}
      </div>
    </div>
    </>
  )
}
