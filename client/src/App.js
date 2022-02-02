import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/Auth.context";
import {NavBar} from "./components/NavBar";
import 'materialize-css';

function App() {
    const {token, login, logout, userId} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            { isAuthenticated && <NavBar /> }
            <div className="container">
                {routes}
            </div>
        </AuthContext.Provider>
    );
}

export default App;
