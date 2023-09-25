import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import {useState} from "react";


function ContactApp() {

    const [user, setUser] = useState({});

    function getUserfromContactList(userData) {
        console.log(userData)
        setUser(userData);
    }


    return <>
        {JSON.stringify(user)}
        <h4>ContactAppList</h4>
        <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        <div className="row">
            <div className="col-md-8">
                <ContactList getUserfromContactList={getUserfromContactList}/>
            </div>
            <div className="col-md-4">
                <ContactCard user={user}/>
            </div>
        </div>
    </>

}

export default ContactApp;