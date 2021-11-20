import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./components/Users/Users";
import {useDispatch, useSelector} from "react-redux";
import {stateFormUser} from "./redux/actions/users.actions";
import FormUser from "./components/createForm/formUser";

function App() {
    const {domReducer} = useSelector(state => state);
    const dispatch = useDispatch();

    const showForm = () => {
        dispatch(stateFormUser('show'));
    };

    return (
        <div className={'app'}>
            <div className={'app__inner'}>
                <div className={`message ${domReducer.message.class}`}>{domReducer.message.text}</div>
                <button className={'btn-create'} onClick={showForm}>Create User</button>
                <Users/>
                <FormUser/>
            </div>
        </div>
    );
}

export default App;
