import React from "react";
import Card from 'react-bootstrap/Card';

//   export const CardAppointment = ({appo}) => {
function CardAppointment ({appo})  {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{appo.date}</Card.Title>
                <ul>
                    <li><li>Dia:</li>{appo.appointment_on}</li>
                    <li><li>Hora:</li>{appo.start_at}</li>
                    <li><li>Tratamiento:</li>{appo.treatment_id}</li>
                    <li><li>Doctor:</li>{appo.professional_id}</li>
                </ul>
        </Card.Body>
        </Card>
    );
}
    

    
export default CardAppointment;
