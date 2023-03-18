import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { InputText } from '../../components/inputText';
import React, { useEffect, useState } from 'react';
import { validate } from '../../helpers/useful';
import './Login.css'

export const Login = () => {

  const [credenciales, setCredenciales]= useState ({

    email: "",
    password: ""

  })

  const [valiCredenciales, setValiCredenciales] = useState({
    emailVali: false,
    passwordVali: false,
  })

  const [credencialesError, setCredencialesError] = useState({
    emailError: "",
    passwordError:""
  });

  const [registerAct, setRegisterAct] = useState(false);

const inputHandler = (e) => {
  setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
  }));
}

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

  const fakeRegister = () => {
    console.log("victoria");
  };

  return (
    <>
    <Container className='loginform'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <InputText 
              className={'inputBasicDesign'}
              type={'text'}
              name={'email'}
              placeholder={'Email...'}
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => checkError(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <InputText 
              className={'inputBasicDesign'}
              type={'password'}
              name={'password'}
              placeholder={'Password...'}
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => checkError(e)}
              />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" 
          className={registerAct ? "registerSendDeac registerSendAct" : "registerSendDeac"}
        onClick={
          registerAct
            ? () => {
                fakeRegister();
              }
            : () => {}
        }>
        Submit
      </Button>
    </Form>
    </Container>
    </>
  )
}
