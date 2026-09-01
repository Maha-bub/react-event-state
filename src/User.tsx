import { use } from "react";
import './user.css';

const User = ({ userDataPromise }) => {
    const users = use(userDataPromise);
    console.log(users);

    return (
        <div>
            <h3>Total User:{users.length}</h3>
            {
                users.map((user) => {
                    return <p className="user">Name:{user.name}</p>;
                })
            }
        </div>
    );
};

export default User;