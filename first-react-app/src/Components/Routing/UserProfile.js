import {useLocation, useParams} from "react-router-dom";

function UserProfile(){

    const params = useParams();
            const location = useLocation();//It will give the all information about path
            console.log(location);
    return (
        <>
            <h3>User Profile</h3>
            <p>{params.id}</p>
            <p>{params.name}</p>
            <p>{location.state.name}</p>
            <p>{location.state.age}</p>
        </>
    );
}
export default UserProfile;