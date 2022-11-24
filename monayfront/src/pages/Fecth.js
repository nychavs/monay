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

// localhost/auth/jwt/create
//quando expirar localhost/auth/jwt/refresh
// "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTM3ODkzOCwianRpIjoiMjI3YzMwZDRiYmE0NDE0OTkwODFiZDNkNDkzZTc4YzEiLCJ1c2VyX2lkIjoxfQ.1iMf0E-2Wh2i6HVcl1QSrPkhOeHD5vVguzggrStbsoE",
//"access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MjkxNjk1LCJqdGkiOiJkNGMwMGZjNmZjZDM0YjVjOWNiMGU5Zjg3MDM5NGQ4MiIsInVzZXJfaWQiOjF9.fosavFGsTeZxZJavEI5kHa-d_NstM0Wmtuyz4C0B1uw"
//}
//na extensão usar o token de access