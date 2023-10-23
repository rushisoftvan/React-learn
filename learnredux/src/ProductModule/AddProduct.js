import {useFormik} from "formik";
import {addProduct, fetchProductList} from "./Redux/ProductAction";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

function AddProduct(props) {
    const navigate =  useNavigate();
    console.log(props);
    const productDetails = useFormik({
        initialValues: {
            ProductName: '',
            ProductDescription: '',
            ProductPrice: ''
        },
        onSubmit: (values) => {
            console.log(values);
            const sendProduct = {
                productName: values.ProductName,
                productDescription: values.ProductDescription,
                productPrice: parseInt(values.ProductPrice)
            }
              props.addProduct(sendProduct);
            navigate("/products");

        }


    });
    return (
        <>
            <h5>addproduct</h5>
            <div className="text-center">
                <form onSubmit={productDetails.handleSubmit}>
                    <dl>
                        <dt>Product Name</dt>
                        <dd><input className="w-25" type="text" name="ProductName"
                                   value={productDetails.values.ProductName} onChange={productDetails.handleChange}/>
                        </dd>
                        {/*<dd>{productDetails.errors.ProductName}</dd><br/>*/}
                        <dt>Product Description</dt>
                        <dd><textarea className="w-25" row="4" col="50" name="ProductDescription"
                                      value={productDetails.values.ProductDescription}
                                      onChange={productDetails.handleChange}/></dd>
                        {/*<dd>{productDetails.errors.ProductDescription}</dd>*/}
                        <dt>Product Price</dt>
                        <dd><input name="ProductPrice" className="w-25" type="text"
                                   value={productDetails.values.ProductPrice} onChange={productDetails.handleChange}/>
                        </dd>
                        {/*<dd>{productDetails.errors.ProductPrice}</dd>*/}
                    </dl>
                    <button type="submit">Add Product</button>
                </form>

            </div>
        </>
    );

}
const mapStateToProps = (state) => {
    return {
        state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product) =>{
            dispatch(addProduct(product))
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps) (AddProduct);