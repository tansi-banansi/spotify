import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AuthenticationPage from "./pages/authenticate";
import HomePage from "./pages/home";
import RedirectPage from "./pages/redirect";

function PrivateRoute({ children }) {
    const isAuthenticated = localStorage.getItem('accessToken');
    if (!isAuthenticated) {
        return <Navigate to="/authenticate" />;
    }
    return children;
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/authenticate" element={<AuthenticationPage />} />
                <Route path="/redirect" element={<RedirectPage />} />
            </Routes>
        </Router>
    );
}

export default App;