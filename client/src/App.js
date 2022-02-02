import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import 'materialize-css';

function App() {
    const {token, login, logout, userId} = useAuth();

    const routes = useRoutes(false);
    return (
        <div className="container">
            {routes}
        </div>
    );
}

export default App;
