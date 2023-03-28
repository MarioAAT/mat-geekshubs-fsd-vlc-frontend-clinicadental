import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CardAppointment from '../../components/AppointmentC';
import { getAppointmentasUser } from '../../services/apiCalls';
import { getTreatment } from '../../services/apiCalls';
import { userData } from '../userSlice';

export const AppointmentUser = () => {

    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();

    
    const [appointments, setAppointments] = useState([]);
    const [treatments, setTreatments] = useState([]);

    useEffect(() => {
        if(appointments.length === 0) {
            getAppointmentasUser(ReduxCredentials?.credentials?.token)
            .then((result) => {
                setAppointments(result.data.appointments);
            })
            .catch((error) => {
                console.log(error);
            });
        }

        if(treatments.length === 0) { 
            getTreatment(ReduxCredentials?.credentials?.token)
            .then((result) => {
                setTreatments(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, [appointments, treatments]);

    return (
        <>
        <Container>
        { appointments.length > 0 ? 
            (<Row>
                {appointments.map( (citas) => {
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
