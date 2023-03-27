import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardAppointment from '../../components/AppointmentC';
import { getAppointmentasUser } from '../../services/apiCalls';
import { getTreatment } from '../../services/apiCalls';
import { userData } from '../userSlice';

export const AppointmentUser = () => {

    const ReduxCredentials = useSelector(userData);
    
    const [appointments, setAppointments] = useState([]);
    const [treatment, setTreatment] = useState([]);

    useEffect(() => {
        if(appointments.length === 0) {
            getAppointmentasUser(ReduxCredentials?.credentials?.token)
            .then((result) => {
                setAppointments(result.data.appointments);
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
        }

        if(treatment.length === 0) { 
            getTreatment(ReduxCredentials?.token)
            .then((result) => {
                console.log('Hey, Culero!!',result);
                setTreatment(result.data.token.treatment);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, [appointments, treatment]);

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
