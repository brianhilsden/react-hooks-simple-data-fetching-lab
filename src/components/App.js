const { useEffect, useState } = require("react")

// create your App component here
function App(){
  
    const [image,setImage] = useState("")
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(data=>setImage(data.message));
      
    },[])

    return(
        <div>
            {!image && <p>Loading...</p>}
            {image && <img src={image} alt="A Random Dog"/>}

        </div>
       

    )
}
export default App