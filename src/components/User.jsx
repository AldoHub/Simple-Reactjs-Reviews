
const User = () => {
    
    //user details
    const user = {
        name: "USER NAME",
        email: 'useremail@email.com'
    };

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default User;