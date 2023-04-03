import React, { useState, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addChoosen } from '../detailSlice';
import { getAllUsers } from '../../services/apiCalls'; 
import { userData } from '../userSlice'; 


export const GetAllUsers = () => {
    
    const [users, setUsers] = useState([]);
    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(users.length === 0){

            getAllUsers(ReduxCredentials.credentials.token)
                .then(
                    result => {
                        setUsers(result.data.user_list)

                    }
                )      
                .catch((error) => console.log(error));
        }
    },[users])

    const selected = (persona) => {
    dispatch(addChoosen({ choosenObject: persona }))
        setTimeout(() => {
            navigate("/userdetail");
        }, 500);
    }


    return (
        <>
        <div className='usersDesign'>
            { users.length > 0 ? 
                (<div>{users.map(
                    persona => {
                        return (
                        <div
                        onClick={()=>selected(persona)} 
                        key={persona.id}>
                        {/* {persona.first_name} */}
                        {persona.first_name}
                        </div>
                        )
                    })
                    }
                </div>)
                : 
                (<div>......</div>)
            }
        </div>
        </>
    );
}
