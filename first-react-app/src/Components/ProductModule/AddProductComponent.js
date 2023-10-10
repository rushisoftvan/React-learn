import {useFormik} from "formik";
import * as yup from "yup";
import ProductService from "./ProductService";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function AddProductComponent(){
    const navigate = useNavigate();
    const productDetails = useFormik({
        initialValues:{
            ProductName:'',
            ProductDescription:'',
            ProductPrice:''
        },
         validationSchema : yup.object(
             {
                 ProductName : yup.string().required("productName should not be empty"),
                 ProductDescription:yup.string().required("ProductDescription should not be empty"),
                 ProductPrice:yup.number().required("Product Price should not be empty")
             }
         ),

        onSubmit :(values)=>{
            const sendProduct = {
                productName:values.ProductName,
                productDescription :values.ProductDescription,
                productPrice:parseInt(values.ProductPrice)
            }
            ProductService.addProduct(sendProduct).then((res)=>{
                if(res.data.statusCode==201){
                    navigate("/products");
                    toast("product added successfully");
                }
            })
        }
    });

    return (
        <>
            <div className="text-center">
                <form onSubmit={productDetails.handleSubmit}>
                    <dl>
                        <dt>Product Name</dt>
                        <dd><input className="w-25" type="text" name="ProductName" value={productDetails.values.ProductName} onChange={productDetails.handleChange}/></dd>
                          <dd>{productDetails.errors.ProductName}</dd><br/>
                        <dt>Product Description</dt>
                        <dd><textarea className="w-25" row="4" col="50" name="ProductDescription" value={productDetails.values.ProductDescription} onChange={productDetails.handleChange}/></dd>
                        <dd>{productDetails.errors.ProductDescription}</dd>
                        <dt>Product Price</dt>
                        <dd><input name="ProductPrice" className="w-25" type="text" value={productDetails.values.ProductPrice} onChange={productDetails.handleChange}/></dd>
                        <dd>{productDetails.errors.ProductPrice}</dd>
                    </dl>
                    <button type="submit">Add Product</button>
                </form>

            </div>
        </>


    );
}
export default AddProductComponent;
