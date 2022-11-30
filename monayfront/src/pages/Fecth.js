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
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTg5Mjg2MCwianRpIjoiY2Q4MTFjZDA5MmNjNDk4NWI2YzA4YjdmYzgyMTc3NTUiLCJ1c2VyX2lkIjoxfQ.N0Km9jRNVW0pGay_pEiLBKypCLaIFKQVmCT3-R_cXrY