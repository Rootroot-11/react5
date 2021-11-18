import {Link} from "react-router-dom";
import './User.css';

export function User({userInfo}) {
    const {user_name, first_name, last_name, email, user_type} = userInfo;

    return (
            <div className='user'>
                <div>{user_name}</div>
                <div>{first_name}</div>
                <div>{last_name}</div>
                <div>{email}</div>
                <div className='user_type'>{user_type}</div>
            </div>
    )
}
