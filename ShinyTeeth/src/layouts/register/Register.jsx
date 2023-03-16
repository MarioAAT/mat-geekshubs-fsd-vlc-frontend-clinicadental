import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react';
import { InputText } from '../../components/inputText';
import { validate } from '../../helpers/useful';
import './Register.css'

export const Register = () => {

  const [credenciales, setCredenciales]= useState ({

    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    zip:""

  })

  const [valiCredenciales, setValiCredenciales] = useState({
    nameVali: false,
    emailVali: false,
    passwordVali: false,
    addressVali: false,
    cityVali: false,
    zipVali: false,
  })

  const [credencialesError, setCredencialesError] = useState({
    nameError: "",
    emailError: "",
    passwordError:"",
    addressError:"",
    cityError:"",
    zipError:"",
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
    <Container className='tituloRegistro mt-5'>
    <h1 className=''>REGISTRO</h1>
    </Container>
    <Container className='mt-5' >
    <Form>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <InputText 
              className={credencialesError.nameError === ""
              ? "inputBasicDesign"
              : "inputBasicDesign inputErrorDesign"}
              type={'text'}
              name={'name'}
              placeholder={'Name...'}
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => checkError(e)}
          />
        </Form.Group>
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

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <InputText
            className={credencialesError.addressError === ""
            ? "inputBasicDesign"
            : "inputBasicDesign inputErrorDesign"}
            type={'text'}
            name={'address'}
            placeholder={'Address...'}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <InputText 
            className={credencialesError.cityError === ""
            ? "inputBasicDesign"
            : "inputBasicDesign inputErrorDesign"}
            type={'text'}
            name={'city'}
            placeholder={'City...'}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <InputText 
            className={credencialesError.zipError === ""
            ? "inputBasicDesign"
            : "inputBasicDesign inputErrorDesign"}
            type={'number'}
            name={'zip'}
            placeholder={'ZipCode...'}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
            />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button className={
          registerAct ? "registerSendDeac registerSendAct" : "registerSendDeac"
        }
        onClick={
          //Si el hook registerAct es true, el onclick nos permitirá ejecutar la función que haría el registro....
          registerAct
            ? () => {
                fakeRegister();
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
