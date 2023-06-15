
import {useState, useEffect} from 'react'

function App() {

  const [producto, setProducto] = useState([]);
  
  const peticionGet = async()=>{
   const url = await fetch('https://localhost:5000/productos');

   const response = url.json()
   
   return response
  }

  useEffect(()=>{
     (async()=>{
      let productos =  await peticionGet();
      console.log(productos);
      setProducto(productos)
     })()
  }, [])
  return (
    <div className="App">
      <div>
        {producto.map(x=>(
         <div>
          <p>{x.name}</p>
          <p>{x.precio}</p>
         </div>
        ))}
      </div>
    </div>
  );
}

export default App;
