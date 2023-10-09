import {useEffect, useState} from "react";
import ProductService from "./ProductService";
import productService from "./ProductService";


function ProductListComponent(){
      const [productList,setProductsList] = useState([]);

      useEffect(()=>{
           ProductService.getProducts()
               .then((res)=>{
                   setProductsList(res.data.data)


               })
          }

      ,[]);

      function handleDelete(productId){
          //ProductService.deleteProduct(productId)
          console.log(productId);
          if(window.confirm("Do you want to delete?")){
              productService.deleteProduct(productId);
              window.location.reload();
          }
      }

      function handleEdit(productId){

      }

    return (
        <>  
            <h3>Product-List</h3>
             <div className="row">
                 {
                     productList.map((product)=>{
                         return <div className="col-md-4">
                             <div className="card-body">
                                 <h5>{product.productName.toUpperCase()}</h5>
                                 <p>{product.productDescription}</p>
                                 <p>{product.productPrice}</p>
                                 {/*<a href="#" className="card-link">delete</a>*/}
                                 {/*<a className"edit" href="#" className="card-link">Edit</a>*/}
                                 <button className="btn btn-primary" onClick={()=>{}}>Edit</button>
                                 <button className="ms-1 btn btn-primary" onClick={()=>{handleDelete(product.productId)}}>Delete</button>
                             </div>
                                </div>
                     })
                 }
             </div>


        </>
    );
}
export default ProductListComponent;