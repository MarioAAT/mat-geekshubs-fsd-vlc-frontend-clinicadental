import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { InputText } from '../../components/inputText';
import { useEffect, useState } from 'react';
import './Login.css'

export const Login = () => {

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

  useEffect(() => {console.log(credenciales)}, [credenciales])

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
              changeFunction={(e) => inputHandler(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <InputText 
              className={'inputBasicDesign'}
              type={'password'}
              name={'password'}
              placeholder={'Password...'}
              changeFunction={(e) => inputHandler(e)}
              />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </>
  )
}
