function PrivateRoute({children,props}){

    return (
        <>
            localStorage.getItem("item") ===  ? children : <Navigate to="/login"/>
         </>);

}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default c PrivateRoute;