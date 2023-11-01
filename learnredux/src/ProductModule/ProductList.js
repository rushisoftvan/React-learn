import {connect} from "react-redux";
import {useEffect} from "react";
import {fetchProductList, removeProduct, removeuser} from "./Redux/ProductAction";
import {useNavigate} from "react-router-dom";


function ProductList(props){
    console.log("ProductList");
    const navigate =useNavigate();
    console.log(props);
    useEffect(() => {
         console.log("productList");
        props.loaduser();
    }, []);

    function deleteProduct(id){

        console.log("delete product");
        props.remove(id);
    }

    return (
      <>
          <div className="container">
              <h3>productList</h3>
              { props.state.loading==true?<h2>Loading</h2>
                  :
                  <div>
                      <button className="btn btn-success" onClick={()=>{navigate('/addproduct')}}>ADD</button>
                      <div className="row mt-3">

                          {
                              props.state.productList.length > 0 ? props.state.productList.map((product) => {
                                      return <div className="col-md-4">
                                          <div className="card">
                                              <div className="card-body">
                                                  <h5>{product.productName.toUpperCase()}</h5>
                                                  <p>{product.productDescription}</p>
                                                  <p>{product.productPrice}</p>
                                                  {/*<a href="#" className="card-link">delete</a>*/}
                                                  {/*<a className"edit" href="#" className="card-link">Edit</a>*/}
                                                  <button className="btn btn-primary" onClick = {()=>{ navigate(`/update/${product.productId}`)}}
                                                  >Edit
                                                  </button>
                                                  <button className="ms-1 btn btn-primary" onClick={() =>  deleteProduct(product.productId)}
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

              }
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
        showPatient: () =>{
            dispatch(fetchProductList())
        }

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductList);