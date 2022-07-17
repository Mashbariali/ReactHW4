import React,{useEffect, useState} from 'react'
import axios from 'axios'


export default function GitCrud() {
    const [data , setData] = useState([])
    useEffect(()=>{
        axios.get(`https://62d43e245112e98e484cd960.mockapi.io/HW`)
        .then(res =>{
            console.log(res.data);
            // setData(res.data[0].title);
            setData(res.data)
        })
      .catch(err =>{
        console.log(err);
      })
    },[])
    const setUpData = (d)=>{
        let {id , name,password} = d
        localStorage.setItem("id" , id)
        localStorage.setItem("name" , name)
        localStorage.setItem("password" , password)

    }
    const getData = ()=>{
        axios.get(`https://62d43e245112e98e484cd960.mockapi.io/HW`)
        .then((getData) =>{
            setData(getData.data)

        })
    }
    const onDelete=(id)=>{
        axios.delete(`https://62d43e245112e98e484cd960.mockapi.io/HW/${id}`)
        .then(()=>{
            getData()

        })

    }
  return (
    <div>
        <ul>

            
         {data.map(d => (
            <>
            <li>{d.name} {d.password}</li>
            <button onClick={setUpData(d)}>Updata</button>
            <button onClick={()=>{onDelete(d.id)}}>Delete</button>
            </>
         ))} 
        
         </ul>
    </div>

  )
}
