import Reart, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';


const Register = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async (e) => {


    }

    return (

        <div className="small-container">
            <form onSubmit={handleLogin}>
                <h1>pacjent / dodaj uzytkownika</h1>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="qwerty"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input style={{ marginTop: '12px' }} type="submit" value="Login" name="Login" />
                {/* <input style={{ marginTop: '12px', marginLeft: '12px', backgroundColor: 'black' }} type="submit" value="Register" name="Register" /> */}
                {/* <input style={{ marginTop: '12px', marginLeft: '12px' }} type="submit" value="Register" name="Register" /> */}

                <Link to="/login" >Login</Link>

            </form>
        </div>
    )
}

export default Register;