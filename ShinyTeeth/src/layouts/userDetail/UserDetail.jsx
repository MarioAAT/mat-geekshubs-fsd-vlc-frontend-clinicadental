import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { detailData } from '../detailSlice'

export const UserDetail = () => {

  const detailRedux = useSelector(detailData);

  useEffect(()=>{
      console.log(detailRedux,"patata")
  },[])



  return (
    <>
    <div className=''>
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
    </>
  )
}
