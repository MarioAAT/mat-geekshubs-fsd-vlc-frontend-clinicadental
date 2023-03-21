import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { InputText } from '../../components/inputText';
import { validate } from '../../helpers/useful';
import { Container, Form, Col, Row, Button} from 'react-bootstrap/';
import { nuevoUsuario } from '../../services/apiCalls';
import './Register.css'

export const Register = () => {

  const [credenciales, setCredenciales]= useState ({
    email: "",
    password: ""
  })

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
  }

  const [valiCredenciales, setValiCredenciales] = useState({
    emailVali: false,
    passwordVali: false
  })

  const [credencialesError, setCredencialesError] = useState({
    emailError: "",
    passwordError:""
  });

  const [registerAct, setRegisterAct] = useState(false);

  const navigate = useNavigate();



  useEffect(() => {

    for(let error in credencialesError){
      if(credencialesError[error] !== ""){
        setRegisterAct(false);
        return;
      }
    }

    for(let vacio in credenciales){
      if(credenciales[vacio] === ""){
        setRegisterAct(false);
        return;
      }
    }

    for(let validated in valiCredenciales){
      if(valiCredenciales[validated] === false){
        setRegisterAct(false);
        return;
      }
    }

    setRegisterAct(true);
  });

  const checkError = (e) => {


    let error = "";

    let checked = validate(
      e.target.name,
      e.target.value,
      e.target.required
    );

    error = checked.message;

    console.log("asdfasdf",valiCredenciales)

    setValiCredenciales((prevState) => ({
      ...prevState,
      [e.target.name + "Vali"]: checked.validated,
    }));

    setCredencialesError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const registraUsuario = () => {
    nuevoUsuario(credenciales)
            .then(() => {
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            })
            .catch((error) => console.log(error));
  };

  return (
    <>
    <Container className='tituloRegistro mt-5'>
    <h1 className=''>REGISTRO</h1>
    </Container>
    <Container className='mt-5' >
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <InputText
              className={credencialesError.emailError === ""
              ? "inputBasicDesign"
              : "inputBasicDesign inputErrorDesign"}
              type={'text'}
              name={'email'}
              placeholder={'Email...'}
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => checkError(e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <InputText

              className={credencialesError.passwordError === ""
              ? "inputBasicDesign"
              : "inputBasicDesign inputErrorDesign"}
              type={'password'}
              name={'password'}
              placeholder={'Password...'}
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => checkError(e)}
          />
        </Form.Group>
      </Row>

      <Button className={
          registerAct ? "registerSendDeac registerSendAct" : "registerSendDeac"
        }
        onClick={
          registerAct
            ? () => {
                registraUsuario();
              }
            : () => {}
        }>
        Register me!
      </Button>
    </Form>
    </Container>
    </>
  )
}
