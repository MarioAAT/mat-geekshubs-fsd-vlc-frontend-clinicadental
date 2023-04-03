import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import { InputText } from '../../components/inputText';
import { updateProfile } from '../../services/apiCalls';
import { userData } from '../userSlice';
import { Container, Form,  Button} from 'react-bootstrap';




export const PutProfile = () => {

    const ReduxCredentials = useSelector(userData);
    const [welcome, setWelcome] = useState("");
    const navigate = useNavigate();
    console.log(ReduxCredentials, "esto es Redux Profile") 
    const ID = ReduxCredentials.credentials.userId

    const [putProfile, setputProfile] = useState({
        id: ID,
        first_name: "",
        middle_name: "",
        last_name:"",
        mobile_phone:"",
    });


    const inputHandler = (e) => {
        setputProfile((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value,
        }));
    };

    const checkError = (e) => {}

    const putUserProfile = () => {
        updateProfile(putProfile, ReduxCredentials.credentials.token)
        .then( (resultado) => {
            setputProfile(resultado.data)
            setWelcome('Perfil modificado correctamente');
            setTimeout(() =>{
                navigate('/profile');
            }, 3500);
        })
        .cath(error =>{
            setputProfile(error.message)
        });
    }
    console.log(putProfile, "hola putappointment")

    return (
    <>
    <Container className='profileform'>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <InputText 
            className={''}
            type={'text'}
            name={'first_name'}
            placeholder={'First Name...'}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Middle Name</Form.Label>
        <InputText 
            className={''}
            type={'text'}
            name={'middle_name'}
            placeholder={'Middle Name...'}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <InputText 
            className={''}
            type={'text'}
            name={'last_name'}
            placeholder={'Last Name...'}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile Phone</Form.Label>
        <InputText 
            className={''}
            type={'text'}
            name={'mobile_phone'}
            placeholder={'Mobile Phone...'}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
            />
        </Form.Group>
        <Button
        variant="primary" onClick={putUserProfile}
        >Submit
        </Button>
    </Form>
    </Container>
    </>
    )
}
