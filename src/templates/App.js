import './App.css';
import {useUserContext} from "./context/userContext";
import Dashboard from "./pages/dashboard/Dashboard";
import Auth from "./context/auth/auth";

function App() {
    const { loading, error, user } = useUserContext();
    return (
        <div className="App">
            { error && <p className="error"> {error} </p> }
            {loading ? <h2>Loading...</h2> : <div>{user ? <Dashboard /> : <Auth />}</div>}
        </div>
    );
}

export default App;
