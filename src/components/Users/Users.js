import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import {User} from "../User/User";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, [users]);

    return (
        <div>
            {
                users.map((value) => <User key={value.id} userInfo={value}/>)
            }
        </div>
    );
}
