import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.api";


export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('ue')
        getUsers().then(value => setUsers([...value]));
    }, []);


    return (
        <div>
            {
                users.map(value => <User item={value} key={value.id}/>)
            }
        </div>
    );
}