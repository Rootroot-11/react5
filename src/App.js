// Є три лінки
// /users-page
// /posts-page
// /comments-page
// При кліку на відповідну лінку відбувається перехід на відповідний компонент,
//     який дістає з jsonplaceholder інформацію про відповідні стуності, та виводить їх повний список
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom"
import Users from "./components/users-page/Users";
import Posts from "./components/posts=page/Posts";
import Comments from "./components/comments-page/Comments";


export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>to default page</Link>
                <br/>
                <Link to={'/all users'}>users</Link>
                <br/>
                <Link to={'/posts'}>posts</Link>
                <br/>
                <Link to={'/comments'}>comments</Link>
                <Switch>

                    <Route path={'/all users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/comments'} component={Comments}/>

                </Switch>

            </div>
        </Router>
    );
}
