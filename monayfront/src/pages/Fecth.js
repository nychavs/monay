import React, { useEffect, useState } from 'react'

function Fecth() {
    const [data, setData] = useState([])

    const apiGet = () =>{   
        fetch("http://127.0.0.1:8000/monay/usuario/?format=json")
        // fetch("http://jsonplaceholder.typicode.com/posts")
        .then((response) => 
        response.json())
        .then((json) => {
            console.log(json)
            setData(json)
        })
    }

    useEffect(()=>{
        apiGet();
    }, [])

    return (
    <div>
        <div>
            <ul>
                {data.map((item) => (
                    // <li key={item.id}>{item.title}</li>
                    <li key={item.statusUsuario}>{item.cpfUsuario}</li>
                ))}

            </ul>
        </div>
    </div>
  )
}

export default Fecth

//"refresh": 
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MTE5MTM0NywianRpIjoiNDk2MWI3MTA2ZTJlNDdiODk3ZTBmMzUwOGRlODZjYmYiLCJ1c2VyX2lkIjoxfQ.iYBlEgo9Wk5O9opEj5Kf39mlG1K2MPj26H1TyT9QqJs