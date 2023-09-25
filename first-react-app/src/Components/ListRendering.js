import {useEffect, useState} from "react";

function ListRendering() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProductsHandler();
    }, []);

    function loadProductsHandler() {
        // In fetch api data come in binary from then we have to convert into json
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then(data => setProducts(data));

    }

    return <>
        <h3>List Rendrering</h3>
        <div className="row">
            {
                products.map((product) => {
                    console.log(product.image);
                    return <div key={product.id} className="col-md-4">

                        <img className="image" src={product.image} alt="product image is not available"/>
                        <div>
                            <span>Title{product.title}</span><br/>
                            
                        </div>

                    </div>


                })
            }
        </div>

    </>
}

export default ListRendering;