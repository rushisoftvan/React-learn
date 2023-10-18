import {CHANGE_PRICE_BY_ID, SHOW_USER} from "./product_type";

const instialState =
    {
        productList:
            [
                {
                    productId:1,
                    productName: "mobile",
                    productPrice: 5000
                },
                {
                    productId: 2,
                    productName: "laptop",
                    productPrice: 5000
                }
            ]

    }

const ProductReducer = (products = instialState, action) => {
    switch (action.type) {

        case SHOW_USER :
            return products;

        case CHANGE_PRICE_BY_ID :

            // const product = products.productList.find(({productId}) => productId === action.payload);
            // //console.log(product);
            // return [...products,{}]
           // products.productList.map((product)=>{
           //      if(product.productId==action.payload){
           //          return {...product,productPrice:7000}
           //      }
           //

            const newProducts = products.productList.map(product => {

                // 👇️ if id equals 2, update country property
                if (product.productId === action.payload) {
                    return {...product, productPrice: 70000};
                }

                // 👇️ otherwise return the object as is
                return product;
            });

            return newProducts;


        default :
            return products;
    }
}
export default ProductReducer;

