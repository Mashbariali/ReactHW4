import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
export default function Create() {
    const nav = useNavigate() 
    const [name , setName] = useState('')
    const [password , setPassword] = useState('')

    const postData = ()=>{
        axios.post(`https://62d43e245112e98e484cd960.mockapi.io/HW`,{name,password}
        ).then(res=>{console.log(res);
        nav("/Read")
        })
        .catch(err =>{
            console.log(err);
          })


      }


  return (
    <div>
        <input placeholder='Name' onChange={(e)=>{setName(e.target.value)}}></input>
        <input placeholder='password'onChange={(e)=>{setPassword(e.target.value)}}></input>
        <button onClick={postData}>Login</button>

    </div>
  )
}
