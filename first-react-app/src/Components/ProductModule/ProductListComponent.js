import React, {useEffect, useRef, useState} from "react";
import ProductService from "./ProductService";
import productService from "./ProductService";
import {useNavigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Modal from "./Modal";


function ProductListComponent() {
    const [productList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalShow,setModalShow] =useState(false);
    const navigate = useNavigate();
    const pId = useRef();
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

    function handleDelete() {
        //ProductService.deleteProduct(productId)

        console.log(pId);

             productService.deleteProduct(pId.current).then((res)=>{
                 if(res.data.statusCode==200){
                     let updatedProducts = [...productList].filter((product)=>product.productId !==pId.current);
                   console.log(updatedProducts);
                     setProductsList(updatedProducts);
                }

            });


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

    function showModal(id){
        setModalShow(true);
        pId.current = id;
        console.log(pId);


    }
    function hideModal(){
        setModalShow(false);
    }


    return (
           <div className="container">
               <Modal show={modalShow} hideModal={hideModal}  handleDelete={handleDelete}/><br/>
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
                                           <button className="ms-1 btn btn-primary" onClick={()=>{showModal(product.productId)}}
                                           >Delete
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