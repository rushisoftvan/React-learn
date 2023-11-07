
import {jwtDecode} from "jwt-decode";


const setToken = (token) => {
    localStorage.setItem('token' ,token);
};

const getToken = ()=> {
    const token = sessionStorage.getItem('token');
    if(token){
        return token;
    }
    return null;
}

const getUserRole = () => {
    const token = getToken();
    if(token){
        const payLoad = jwtDecode(token);
        return payLoad?.role;
    }
    return null;
}

export const  checkIsLogedIn = () => {
    console.log("checkIsLogedIn")
    const token = getToken();
    console.log(token);
    if(token){
        const payLoad = jwtDecode(token);
        console.log(payLoad);
        const isLogin = Date.now() < payLoad.exp * 1000;
        console.log(isLogin);
        return isLogin;

    }
}



const logOut = ()=> {
    localStorage.clear();
}

export  const authService = { logOut, getToken, setToken, getUserRole};
