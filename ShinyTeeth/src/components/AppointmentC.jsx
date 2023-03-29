import React from "react";
import Card from 'react-bootstrap/Card';
import { useSelector } from "react-redux";
import { userData } from "../layouts/userSlice";


//   export const CardAppointment = ({appo}) => {
function CardAppointment ({appo})  {
    const credentialsRdx = useSelector(userData)

    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{appo.date}</Card.Title>
                <ul>
                {credentialsRdx.credentials.roleId === 3 ? (
                    <>
                    <li><li>Tratamiento:</li>{appo.treatment_id}</li>
                    <li><li>Doctor:</li>{appo.professional_id}</li>
                    <li><li>Paciente:</li>{appo.patient_id}</li>
                    <li><li>Dia:</li>{appo.appointment_on}</li>
                    <li><li>Hora:</li>{appo.start_at}</li>
                    </>
                    ): credentialsRdx.credentials.roleId === 4? (
                    <>
                    <li><li>Tratamiento:</li>{appo.treatment_id}</li>
                    <li><li>Doctor:</li>{appo.professional_id}</li>
                    <li><li>Paciente:</li>{appo.patient_id}</li>
                    <li><li>Dia:</li>{appo.appointment_on}</li>
                    <li><li>Hora:</li>{appo.start_at}</li>
                    </>
                    ) : (
                    <>
                    <li><li>Dia:</li>{appo.appointment_on}</li>
                    <li><li>Hora:</li>{appo.start_at}</li>
                    </>
                    )}
                </ul>
        </Card.Body>
        </Card>
        </>
    );
}
    

    
export default CardAppointment;
