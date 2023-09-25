function ContactCard(props) {

    const {user} = props

    return (
        <>
            <p className="text-success">ContactCard</p>

            {
                Object.keys(props.user).length > 0 &&
                <div className="card shadow-lg sticky-top">
                    <div className="text-center">
                        <img src={user.thumbnail} alt="Picture is not available"
                             className="w-75 h-75 img-fluid text-center"/>
                    </div>

                    <div className="card-body text-center">
                        <ul className="list-group ">
                            <li className="list-group-item">Name :{user.userName}</li>
                            <li className="list-group-item">Email :{user.email}</li>
                            <li className="list-group-item">Phone :{user.phone}</li>
                            <li className="list-group-item">Location:{user.location}</li>

                        </ul>
                    </div>
                </div>
            }


        </>
    );
}

export default ContactCard;