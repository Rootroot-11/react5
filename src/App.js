import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./components/Users/Users";

function App() {
    return (
        <Router>
            <div>
            <Users/>
            </div>
        </Router>
    );
}

export default App;
