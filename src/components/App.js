const { useEffect, useState } = require("react")

// create your App component here
function App(){
    const [loading,setLoading] = useState(false)
    const [image,setImage] = useState("")
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(data=>setImage(data.message));
        setLoading(true)
    })

    return(
        <div>
            {!image && <p>Loading...</p>}
            {image && <img src={image} alt="A Random Dog"/>}

        </div>
       

    )
}
export default App