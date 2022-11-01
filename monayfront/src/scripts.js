// const url = 'http://127.0.0.1:8000/monay/usuario/?format=json'

const url = 'http://jsonplaceholder.typicode.com/posts'

const postsContainer = document.querySelector("#posts-container")

async function getAllPosts(){
    const response = await fetch(url)
    console.log(response)
    
    const data = await response.json();
    console.log(data)

    data.map((post) => {
        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("p")
        // const link = document.createElement("a")
        
        title.innerText = post.title;
        body.innerText = post.body;
    
        div.appendChild(title)
        div.appendChild(body)
    
        postsContainer.appendChild(div)
        
})

}

getAllPosts()