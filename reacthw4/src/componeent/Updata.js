import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
export default function Updata() {
    const nav = useNavigate() 
    const [name , setName] = useState('')
    const [password , setPassword] = useState('')
    const [id, setId] = useState(null)

    useEffect(()=>{
        
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("Name"))
        setPassword(localStorage.getItem("password"))
    })
    const UpdataData = ()=>{
        axios.put(`https://62d3e34d5112e98e4846d7f9.mockapi.io/FakeData${id}`,{name,password}
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
        <input placeholder='Password'onChange={(e)=>{setPassword(e.target.value)}}></input>
        <button onClick={UpdataData}>Updata</button>

    </div>
  )
}