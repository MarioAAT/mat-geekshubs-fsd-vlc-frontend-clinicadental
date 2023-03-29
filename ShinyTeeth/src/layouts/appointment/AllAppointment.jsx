import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userData } from '../userSlice';
import { Col, Container, Row } from "react-bootstrap";
import CardAppointment from '../../components/AppointmentC';
import { getAllAppointments } from '../../services/apiCalls';


export const AllAppointment = () => {

    const [allAppointments, setAllAppointments] = useState ([]);
    const ReduxCredentials = useSelector(userData)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(allAppointments.length === 0) {
            getAllAppointments(ReduxCredentials?.credentials?.token)
            .then((result) => {
                setAllAppointments(result.data.appointments);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, [allAppointments]);


  return (
    <>
        <Container>
        { allAppointments.length > 0 ? 
            (<Row>
                {allAppointments.map( (citas) => {
                    return (
                        <Col key={citas.id}>
                            <CardAppointment appo={citas}/>
                        </Col>
                    );
                })}
            </Row>)
            : 
            (<div>......</div>)
        }        
        </Container>
    </>
  )
}
