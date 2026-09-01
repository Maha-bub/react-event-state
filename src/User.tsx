import { use } from "react";

const User = ({ userDataPromise }) => {
    const users = use(userDataPromise);
    console.log(users);

    return (
        <div>
            <h3>UserName:{users.length}</h3>
            {
                users.map((user) => {
                    return <p>Name:{user.name}</p>;
                })
            }
        </div>
    );
};

export default User;