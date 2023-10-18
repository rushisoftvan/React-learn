import {connect, useSelector} from "react-redux";
import {getData} from "../redux/ACTIONS/action";


function ComponentOne(props){
    console.log(props);
    console.log(props.product.productList);
  const count = useSelector(state=>state.count);
   const productList=useSelector((products)=>    products);
   // console.log(productList);
    function updateProduct(){
        console.log("updateProduct");
      props.updateProduct(2);
    }

    return(
        <>
         <h3>One</h3>
            <button onClick={updateProduct}>Chanegproduct</button>
            <button onClick={()=>props.getData()}>show data</button>
        </>
    );
}

const mapStateToProps = ((state)=>{
    console.log(state);
    return state;
});

const mapDispacthToPropes=(dispacth)=>{
    return {
        updateProduct : (id)=>{
            dispacth({type:"CHANGE_PRICE_BY_ID",payload:id})
        },
        getData :()=>{
            dispacth(getData())
        }

    }
}


export default  connect(mapStateToProps,mapDispacthToPropes)(ComponentOne);