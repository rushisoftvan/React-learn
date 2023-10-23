import axios from "axios";

const  PRODUCT_API_BASE_URL="http://localhost:8080/products";
class ProductService {
    static getProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }
    static addProduct(product){
        return axios.post(PRODUCT_API_BASE_URL,product);
    }

    static updateproduct(productid,product){
        return axios.put(PRODUCT_API_BASE_URL+"/"+productid,product);
    }

    static deleteProduct(productId){
        return axios.delete(PRODUCT_API_BASE_URL+"/"+productId);
    }

    static getProductById(productId){
        return axios.get(PRODUCT_API_BASE_URL+"/"+productId);
    }
}
export default ProductService;