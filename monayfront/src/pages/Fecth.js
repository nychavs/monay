import React, { useEffect, useState } from 'react'

function Fecth() {
    const [data, setData] = useState([])

    const apiGet = () =>{   
        fetch("http://127.0.0.1:8000/monay/usuario/?format=json")
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
                    <li key={item.id}>{item.title}</li>
                ))}

            </ul>
        </div>
    </div>
  )
}

export default Fecth