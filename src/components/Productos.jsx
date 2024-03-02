import { useState, useEffect } from "react"


function Productos(){
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://fullstack-vercel-node-productos.vercel.app/productos')
            .then((response) => response.json())
            .then(data=>{
                setProducts(data);
                console.log(data);
            })
    }, []);

    return 
    (
        <div>
            Lista de Productos
            {
                products.map(producto=>(
                    <div>
                        prueba
                        {producto.name}
                    </div>
                ))
            }
        </div>

    )
}

export default Productos