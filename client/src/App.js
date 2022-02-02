import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import 'materialize-css';
import {AuthContext} from "./context/Auth.context";

function App() {
    const {token, login, logout, userId} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <div className="container">
                {routes}
            </div>
        </AuthContext.Provider>
    );
}

export default App;
