import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { InputText } from '../../components/inputText';
import React, { useEffect, useState } from 'react';
import { validate } from '../../helpers/useful';
import { logMe } from '../../services/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { login, userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import './Login.css'

export const Login = () => {

  const credentialsRdx = useSelector(userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [credenciales, setCredenciales]= useState ({

    email: "",
    password: ""

  })

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [credencialesError, setCredencialesError] = useState({
    emailError: "",
    passwordError:""
  });

  const [valiCredenciales, setValiCredenciales] = useState({
    emailVali: false,
    passwordVali: false,
  })

  const [loginAct, setLoginAct] = useState(false);
  
  const [welcome, setWelcome] = useState("");

  useEffect(() => {
  console.log(credenciales)
  for(let error in credencialesError){
    if(credencialesError[error] !== ""){
      setLoginAct(false);
      return;
    }
  }

  for(let vacio in credenciales){
    if(credenciales[vacio] === ""){
      setLoginAct(false);
      return;
    }
  }

  for(let validation in valiCredenciales){
    if(valiCredenciales[validation] === false){
      setLoginAct(false);
      return;
    }
  }


  setLoginAct(true);
  });  

  useEffect(() => {
    if (credentialsRdx.credentials.token) {
      //Si No token...home redirect
      navigate("/");
    }
  }, []);

  const checkError = (e) => {


    let error = "";

    let checked = validate(
      e.target.name,
      e.target.value,
      e.target.required
    );

    error = checked.message;

    console.log("Validación",valiCredenciales)

    setValiCredenciales((prevState) => ({
      ...prevState,
      [e.target.name + "Vali"]: checked.validated,
    }));

    setCredencialesError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const logeame = () => {
    logMe(credenciales)
      .then((respuesta) => {
        let decodificado = decodeToken (respuesta.data)
        let datosBackend={
          token: respuesta.data,
          usuario: decodificado
        };
        console.log(datosBackend)
        dispatch(login({ credentials: datosBackend }));
        setWelcome(`Bienvenid@ de nuevo ${datosBackend.usuario.name}`);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
    <Container className='loginform'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" 
          onClick= {loginAct ? () => {logeame(); }: () => {} }>
        Submit
      </Button>
    </Form>
    </Container>
    </>
  );
};
