const listOfContant = [
    {
        id: "AA01",
        userName: "sachin",
        email: "sachin@gmail.com",
        phone: "987364833",
        location: "pune",
        thumbnail: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
        id: "AA02",
        userName: "kishan",
        email: "kihan@gmail.com",
        phone: "987364833",
        location: "ahmedabad",
        thumbnail: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        id: "AA03",
        userName: "dpk",
        email: "dpk@gmail.com",
        phone: "987364833",
        location: "ahmedabad",
        thumbnail: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        id: "AA04",
        userName: "karan",
        email: "karan@gmail.com",
        phone: "987364833",
        location: "kolkata",
        thumbnail: "https://randomuser.me/api/portraits/men/28.jpg"
    },
    {
        id: "AA05",
        userName: "Rajat",
        email: "rajat@gmail.com",
        phone: "987364833",
        location: "Chennai",
        thumbnail: "https://randomuser.me/api/portraits/med/women/47.jpg"
    },
    {
        id: "AA06",
        userName: "Ajay",
        email: "ajay@gmail.com",
        phone: "987364833",
        location: "ahmedabad",
        thumbnail: "https://randomuser.me/api/portraits/men/78.jpg"
    },
    {
        id: "AA07",
        userName: "Jayesh",
        email: "jayesh@gmail.com",
        phone: "987364833",
        location: "Bangalore",
        thumbnail: "https://randomuser.me/api/portraits/men/19.jpg"
    },
    {
        id: "AA08",
        userName: "Sunny",
        email: "sunny@gmail.com",
        phone: "987364833",
        location:
            "Osaka",
        thumbnail: "https://randomuser.me/api/portraits/men/0.jpg"
    }

];

function ContactList(props) {

    function sendUserToContactApp(user) {
        console.log(user)
        props.getUserfromContactList(user);
    }

    return (
        <>
            <p className="text-success">ContactList</p>
            <table className="table table-hover table-bordered">
                <thead className="bg-dark text-center">
                <tr>
                    <th>SrNo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>location</th>
                </tr>
                </thead>
                <tbody>
                {
                    listOfContant.map((user) => {
                        return <tr onClick={() => sendUserToContactApp(user)} key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.location}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </>
    );
}

export default ContactList;