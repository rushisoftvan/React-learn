import {useState} from "react";


function FormComponent() {
    const [users, setUsers] = useState([
        {userId: "rushi"},
        {userId: "abhi"},
        {userId: "rajat"}
    ]);
    const [userMsg, setUserMsg] = useState("");
    const [isUserValid, setIsUserValid] = useState(false);
    const [passwordMsg, setPasswordMsg] = useState("");
    const [cityMsg, setCityMsg] = useState("");
    const [userDetails, setUserDetails] = useState({
        user: "",
        password: "",
        city: ""
    });


    function verifyUserId(e) {

        if (e.target.value == "") {
            setUserMsg("");
        } else {
            for (let user of users) {

                if (user.userId == e.target.value.trim()) {
                    setUserMsg("user id is taken please try another");
                    setIsUserValid(false);
                    break;
                } else {
                    setUserMsg("user id available");
                    setIsUserValid(true);
                }
            }
        }


    }

    function verifyPassword(e) {
        if (e.target.value.match(/(?=.*[A-Z])\w{4,10}/)) {
            setPasswordMsg("Strong password");
        } else {
            if (e.target.value.length < 4) {
                setPasswordMsg("Weak Password");
            } else {
                setPasswordMsg("poor password");
            }
        }

    }

    function validater() {
        if (userDetails.user == "") {
            return false;
        }
        if (userDetails.password == "") {
            return false;
        }
        if (userDetails.city == "") {
            return false;
        }
        return true;
    }


    function hideUserMsg() {
        if (isUserValid) {
            setUserMsg("");
        }

    }

    function hidePasswordMessage() {
        setPasswordMsg("");
    }

    function verifyCity(e) {
        if (e.target.value == "noCity") {
            setCityMsg("Please Select City");
        } else {
            setCityMsg("");
            handleCityChange(e);
        }
    }

    //grab the data from

    function handleUserChange(e) {
        setUserDetails({
            user: e.target.value,
            password: userDetails.password,
            city: userDetails.city
        });
    }

    function handlePasswordChange(e) {
        setUserDetails({
            user: userDetails.user,
            password: e.target.value,
            city: userDetails.city
        })
    }

    function handleCityChange(e) {
        setUserDetails({
            user: userDetails.user,
            password: userDetails.password,
            city: e.target.value
        })
    }

    function registerClick() {
        if (validater()) {
            alert(JSON.stringify(userDetails));
        }

    }

    return (
        <>
            <h4>Register User</h4>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onBlur={hideUserMsg} onKeyUp={verifyUserId} onChange={handleUserChange}/></dd>

                <dd className={(isUserValid == true) ? 'text-success' : 'text-danger'}>{userMsg}</dd>
                <dt>password</dt>
                <dd><input type="password" onChange={handlePasswordChange} onBlur={hidePasswordMessage}
                           onKeyUp={verifyPassword}/></dd>
                <dd>{passwordMsg}</dd>
            </dl>
            <dd>
                <select onChange={verifyCity}>
                    <option value="noCity">Select Your City</option>
                    <option value="delhi">Delhi</option>
                    <option value="hyd">Hyd</option>
                </select>
            </dd>
            <dd className="text-danger">{cityMsg}</dd>
            <button onClick={registerClick}>Register</button>
        </>
    );
}

export default FormComponent;