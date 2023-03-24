
import axios from 'axios';

const root = "http://localhost:3000"

export const logMe = async (body) => {
    return await axios.post(`${root}/api/signin`, body);
} 

export const nuevoUsuario = async (body) => {
  return await axios.post(`${root}/api/signup`, body)
}

export const getAllUsers = async ( token ) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token  
    }
  };
  return await axios.get(`${root}/api/users`, config );
};

export const getUserData = async (token, user) => {

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
    };
    return await axios.get(`${root}/users/${user}`, config)
}
