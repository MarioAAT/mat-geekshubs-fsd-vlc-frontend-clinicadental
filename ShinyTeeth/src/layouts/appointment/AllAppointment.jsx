import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addChoosen } from '../detailSlice';
import { userData } from '../userSlice';
import { getAllAppointments } from '../../services/apiCalls';


export const AllAppointment = () => {
  return (
    <div>AllAppointment</div>
  )
}
