import {useEffect, useState} from "react";
import ProductService from "./ProductService";
import productService from "./ProductService";
import {useNavigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";


function ProductListComponent() {
    const [productList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
            setLoading(true);
            ProductService.getProducts()
                .then((res) => {
                    setProductsList(res.data.data)
                    setLoading(false);
                })
                .catch((e)=>{
                     console.log(e);
                })
        }

        , []);

    function handleDelete(productId) {
        //ProductService.deleteProduct(productId)
        console.log(productId);
        if (window.confirm("Do you want to delete?")) {
            productService.deleteProduct(productId).then((res)=>{
                if(res.data.statusCode==200){
                    let updatedProducts = [...productList].filter((product)=>product.productId !== productId);
                    console.log(updatedProducts);
                    setProductsList(updatedProducts);
                }

            });

        }
    }

    function handleEdit(productId) {
        navigate(`/update/${productId}`);
    }

    if (loading) {
        console.log("loding");
        return <p>Loading...</p>;
    }

    function handleAddProduct() {
        navigate("/addproduct");
    }


    return (
           <div className="container">
               <h3 className="bg-primary text-center text-white">Product-List</h3>
               <button className="btn btn-success" onClick={handleAddProduct}>AddProduct</button><br/>
               <div className="row mt-3">
                   {
                       productList.length > 0 ? productList.map((product) => {
                               return <div className="col-md-4">
                                   <div className="card">
                                       <div className="card-body">
                                           <h5>{product.productName.toUpperCase()}</h5>
                                           <p>{product.productDescription}</p>
                                           <p>{product.productPrice}</p>
                                           {/*<a href="#" className="card-link">delete</a>*/}
                                           {/*<a className"edit" href="#" className="card-link">Edit</a>*/}
                                           <button className="btn btn-primary" onClick={() => {
                                               handleEdit(product.productId);
                                           }}>Edit
                                           </button>
                                           <button className="ms-1 btn btn-primary" onClick={() => {
                                               handleDelete(product.productId)
                                           }}>Delete
                                           </button>
                                       </div>
                                   </div>
                                   <br/>
                               </div>
                           })
                           : <p>PRODUCT NOT AVAILABLE</p>
                   }
               </div>

           </div>




    );
}

export default ProductListComponent;