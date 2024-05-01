import React, { useState } from "react";
import "./Form.css";
import Data from "./Data";

function Form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleInputChange = (setState) => {
        return (event) => {
            setState(event.target.value);
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        // Aquí iría tu lógica de autenticación
        setIsLoggedIn(true); // Solo para propósitos de demostración
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    name="u"
                    placeholder="Username"
                    value={username}
                    onChange={handleInputChange(setUsername)}
                    required
                />
                <input
                    type="password"
                    name="p"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange(setPassword)}
                    required
                />
                <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
            </form>
        </div>
    );
}

export default Form;