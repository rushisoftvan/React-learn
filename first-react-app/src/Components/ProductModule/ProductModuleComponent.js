import {Route, Routes} from "react-router-dom";
import Product from "../Routing/Product";
import React from "react";
import ProductListComponent from "./ProductListComponent";
import AddProductComponent from "./AddProductComponent";
import UpdateProductComponent from "./UpdateProductComponent";
import Modal from "./Modal";


function ProductModuleComponent(){
    return(
        <>
            <h3 className="text-center">PRODUCTMODULEPROJECT</h3>
            <Routes>
                <Route path="/" element={<ProductListComponent/>}/>
                <Route path="addproduct" element={<AddProductComponent/>}/>
                <Route path="products" element={<ProductListComponent/>}/>
                <Route path="update/:id" element={<UpdateProductComponent/>}/>
                <Route path="modal/:id" element={<Modal/>}/>

            </Routes>

        </>
    );
}
export default ProductModuleComponent;