import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { InputText } from '../../components/inputText';
import { useEffect, useState } from 'react';
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

const inputHandler = (e) => {
  setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
  }));
}

  useEffect(() => {console.log(credenciales)}, [credenciales])

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
              className={'inputBasicDesign'}
              type={'text'}
              name={'name'}
              placeholder={'Name...'}
              changeFunction={(e) => inputHandler(e)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <InputText
              className={'inputBasicDesign'}
              type={'text'}
              name={'email'}
              placeholder={'Email...'}
              changeFunction={(e) => inputHandler(e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <InputText

              className={'inputBasicDesign'}
              type={'password'}
              name={'password'}
              placeholder={'Password...'}
              changeFunction={(e) => inputHandler(e)}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <InputText
            className={'inputBasicDesign'}
            type={'text'}
            name={'address'}
            placeholder={'Address...'}
            changeFunction={(e) => inputHandler(e)}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <InputText 
            className={'inputBasicDesign'}
            type={'text'}
            name={'city'}
            placeholder={'City...'}
            changeFunction={(e) => inputHandler(e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <InputText 
            className={'inputBasicDesign'}
            type={'number'}
            name={'zip'}
            placeholder={'ZipCode...'}
            changeFunction={(e) => inputHandler(e)}
            />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
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
