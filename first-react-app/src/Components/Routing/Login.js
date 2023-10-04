function Login(){
    return (
        <>
          <h3>Login</h3>

                <input type="text" placeholder="username"/><br/><br/>
                <input type="text" placeholder="password"/><br/><br/>
                <button onClick={()=>localStorage.setItem("IsLoging","true")}>login</button>


        </>
    );
}

export default Login;