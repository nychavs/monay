import React, { useEffect, useState } from 'react'

function Fecth() {
    const [data, setData] = useState([])
    const [input, setInput] = useState({})
    
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
        <div>
            <h2>get api</h2>
            <div>
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                        ))}

                </ul>
            </div>
        </div>
        <div>
            <h2>post api</h2>
        </div>
    </div>
  )
}

export default Fecth