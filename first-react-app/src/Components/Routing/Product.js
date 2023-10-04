import {useLocation, useSearchParams} from "react-router-dom";

function Product(){
      const location = useLocation();
      console.log(location.search);
    const [searchParams, setSearchParams] = useSearchParams();
   console.log(searchParams);
   const productId = searchParams.get("productId");
   const productName=searchParams.get("productName");
   console.log(productId);
    return (
        <>
            <h3>Product</h3>
            <p>{productId}</p>
            <p>{productName}</p>
        </>
    );

}
export default Product;