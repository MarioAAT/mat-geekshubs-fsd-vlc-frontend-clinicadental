import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'; 
import { InputText } from '../../components/InputText';
import { postAppointment } from '../../services/apiCalls';
import { userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';

export const CreateAppointment = () => {

    const navigate = useNavigate();
    const credentialsRdx = useSelector(userData);

const [treatments, setTreatments] = useState([
    {
        id: 1,
        servicename: "Cirugía Oral"
    },
    {
        id: 2,
        servicename: "Periodoncia"
    },
    {
        id: 3,
        servicename: "Ortodoncia"
    },
    {
        id: 4,
        servicename: "Cirugía Oral"
    },
    {
        id: 5,
        servicename: "Endodoncia"
    },
    {
        id: 6,
        servicename: "Obturación dental"
    },
    ]);
    
    const [doctors, setDoctors] = useState([
    {
        id: 1,
        schedulename: "Odontologia"
    },
    {
        id: 2,
        schedulename: "Endodoncia"
    },
    {
        id: 3,
        schedulename: "Maxilofacia"
    },
    {
        id: 4,
        schedulename: "Ortodoncia"
    },
    {
        id: 5,
        schedulename: "Odontopediatria"
    },
    {
        id: 6,
        schedulename: "Periodoncia"
    }
    ]);
    
    const [credential, setCredential] = useState({
        patient_id: credentialsRdx.credentials.patientId,
        professional_id: "", 
        treatment_id: "", 
        appointment_on: "", 
        start_at:"",
        end_at:""
    });

    console.log(credential);
    
    const inputHandler = (e) => {
        setCredential((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
        }));
    };

    const checkError = (e) => {};




const bookApp = () => {

postAppointment(credential, credentialsRdx?.credentials?.token)
.then ( respuesta => { 
    setCredential(respuesta.data)
    console.log('cabroooon',respuesta);
    setTimeout(() => {
        navigate("/");
    }, 500);
}) .catch(error => {setCredential(error.message)})
}
console.log('Cabron!!!!!', credentialsRdx.credentials.patientId);

return (
<>
<div className='appointment-locat'>
<Container className="container-register">
    <Row className="row-input">
    <Col md={12} lg={6} className="container-inputs">
        <Form>
            <Form.Label>Treatment:</Form.Label>
            <Form.Select name={"treatment_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                <option>Choose your Treatment:</option>
                                {treatments.map((treatment) => {
                                    return (
                                        <option key={treatment.id} value={treatment.id}>{treatment.servicename}</option>
                                    )
                                })}
                            </Form.Select>
    <Form.Group>
        <Form.Label>Date:</Form.Label>
        <InputText className={"inputBasicDesign"}
            type={"date"} 
            name={"appointment_on"} 
            placeholder={"date"} 
            required={true}
            changeFunction={(e) => inputHandler(e)} 
            blurFunction={(e) => checkError(e)} />
    </Form.Group>
    <Form.Group>
        <Form.Label>Hour:</Form.Label>
        <InputText className={"inputBasicDesign"}
            type={"string"} 
            name={"start_at"} 
            placeholder={"hour"} 
            required={true}
            changeFunction={(e) => inputHandler(e)} 
            blurFunction={(e) => checkError(e)} />
    </Form.Group>
    <Form.Label>Schedule:</Form.Label>
    <Form.Select name={"professional_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                <option>Choose schedule:</option>
                                {doctors.map((doctor) => {
                                    return (
                                        <option key={doctor.id} value={doctor.id}>{doctor.schedulename}</option>
                                    )
                                })}
                            </Form.Select>
        </Form>      
        </Col> 
    <div className='b1'>  
    <Button
    onClick={bookApp} variant="primary">
    Book!
    </Button>
</div>
    </Row>
</Container>
</div>
</>
)
}
