import {useEffect, useState} from "react";
import AxoisService from "./AxoisService";

function AxoisDemo(){
    const [users,setUsers] = useState([]);
    useEffect(() => {
        AxoisService.getAllUsers()
            .then((response)=>{console.log(response)})
            .catch((error)=>{console.log(error)})
    }, []);
    return (
        <>
            <h3>AxoisDemo</h3>

        </>
    )
}
export default AxoisDemo;