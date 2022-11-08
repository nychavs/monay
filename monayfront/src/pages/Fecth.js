import React, { useEffect, useState } from 'react'

function Fecth() {
    const [data, setData] = useState([])

    const apiGet = () =>{   
        fetch("https://jsonplaceholder.typicode.com/posts")
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
        <button>get api</button>
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