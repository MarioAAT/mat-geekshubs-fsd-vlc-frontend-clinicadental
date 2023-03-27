import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardAppointment from '../../components/AppointmentC';
import { getAppointmentasUser } from '../../services/apiCalls';
import { userData } from '../userSlice';

export const AppointmentUser = () => {

    const ReduxCredentials = useSelector(userData);
    const [appointments, setAppointments] = useState([]);

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
    }, [appointments]);

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
