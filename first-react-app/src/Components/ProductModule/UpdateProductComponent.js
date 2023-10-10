import {useFormik} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import ProductService from "./ProductService";

import {useEffect, useState} from "react";
function UpdateProductComponent(){
    console.log("updateProduct")
    const navigate=useNavigate();
         const params = useParams();

     const updateProduct=useFormik(
        {
            initialValues:{
                ProductName:'',
                ProductDescription:'',
                ProductPrice:'',
                staus:''
            },

            onSubmit:(values)=>{
                const newValues = {
                    productName:values.ProductName,
                    productDescription:values.ProductDescription,
                    productPrice:parseInt(values.ProductPrice),
                    staus:product.staus
                }
                console.log(newValues.StatusEnum);
                console.log(newValues);

               ProductService.updateproduct(params.id,newValues).then(
                   (res)=>{
                       console.log(res);
                     navigate("/products");
                   }
               )
            }
        }
    );
    const [product,setProduct]  =useState(updateProduct.values);
    useEffect(() => {
        ProductService.getProductById(params.id).then((res)=>{
            console.log(res.data.statusCode==200);
            console.log(res.data.data);
              updateProduct.values.ProductDescription =res.data.data.productDescription;
             updateProduct.values.ProductName= res.data.data.productName;
               updateProduct.values.ProductPrice=res.data.data.productPrice;
               updateProduct.values.StatusEnum=res.data.data.status
              setProduct({
                 ProductName:res.data.data.productName,
                  ProductDescription:res.data.data.productDescription,
                  ProductPrice:res.data.data.productPrice,
                  staus: res.data.data.status


               });

        })

    }, [params.id]);


    return (
        <>
            <h3>uopdateproduct</h3>
            <div className="text-center">
                <form onSubmit={updateProduct.handleSubmit}>
                    <h3>UpdateProduct</h3>
                    <dl>
                        <dt>Product Name</dt>
                        <dd><input className="w-25" type="text" name="ProductName" value={updateProduct.values.ProductName} onChange={updateProduct.handleChange}/></dd>
                        {/*<dd>{productDetails.errors.ProductName}</dd><br/>*/}
                        <dt>Product Description</dt>
                        <dd><textarea className="w-25" row="4" col="50" name="ProductDescription" value={updateProduct.values.ProductDescription} onChange={updateProduct.handleChange}/></dd>
                        {/*<dd>{productDetails.errors.ProductDescription}</dd>*/}
                        <dt>Product Price</dt>
                        <dd><input name="ProductPrice" className="w-25" type="text" value={updateProduct.values.ProductPrice} onChange={updateProduct.handleChange}/></dd>
                        {/*<dd>{productDetails.errors.ProductPrice}</dd>*/}
                    </dl>
                    <button type="submit">Update</button>
                </form>

            </div>



        </>
    );

}
export default UpdateProductComponent;