import React, { useState } from "react";
import "./Form.css";
import Cinema from "../Cinema/Cinema";

function Form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Obtener usuarios del localStorage al cargar el componente
    const initialUsers = JSON.parse(localStorage.getItem('users')) || [];

    const handleInputChange = (setState) => {
        return (event) => {
            setState(event.target.value);
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        // Verificar si el usuario y la contraseña coinciden
        const user = initialUsers.find(user => user.email === username && user.password === password);
        if (user) {
            setIsLoggedIn(true);
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const newUser = { email: username, password: password };
        // Verificar si el usuario ya existe
        const userExists = initialUsers.some(user => user.email === username);
        if (!userExists) {
            // Agregar el nuevo usuario al estado y actualizar el localStorage
            const updatedUsers = [...initialUsers, newUser];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            setUsername("");
            setPassword("");
            alert("Usuario registrado correctamente.");
        } else {
            alert("El usuario ya existe.");
        }
    }

    return (
        <>
            {isLoggedIn ? (
                <Cinema/>
            ) : (
                <div className="login">
                    <h1> Movie Playlist </h1>
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
                        <button type="submit" className="btn btn-primary btn-block btn-large">Login</button>
                    </form>
                    <form onSubmit={handleRegister}>
                        <button type="submit" className="btn btn-primary btn-block btn-large">Registrar</button>
                    </form>
                </div>
            )}
        </>
    );
}

export default Form;