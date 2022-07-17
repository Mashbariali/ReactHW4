import React,{useEffect, useState} from 'react'
import axios from 'axios'


export default function Git() {
    const [data , setData] = useState([])
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/series/list/series`)
        .then(res =>{
            console.log(res.data.Series);
            // setData(res.data[0].title);
            setData(res.data.Series)
        })
      .catch(err =>{
        console.log(err);
      })
    },[])
     const value = data.map(element=>element.title)
  return (
    <div>
        <ul>
            <li>{value}</li>
        {/* {data.map(d =>(d.title))} */}
         {/* {data.map(d =>(d.description))} */}
         </ul>
    </div>

  )
}
