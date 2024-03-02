import { useState, useEffect } from "react"


function Products(){
    const [productos, setProductos] = useState([]);


    useEffect(() => {
        fetch('https://fullstack-vercel-node-productos.vercel.app/productos')
            .then((response) => response.json())
            .then(data=>{
                setProductos(data);
                console.log(data);
            })
    }, []);

    return 
    (
        <div>
            Lista de Productos
            {
                productos.map(producto=>(
                    <div>
                        prueba
                        {producto.name}
                    </div>
                ))
            }
        </div>

    )
}

export default Products