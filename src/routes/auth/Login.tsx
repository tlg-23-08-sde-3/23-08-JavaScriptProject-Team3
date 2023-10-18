import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRef } from 'react';
import "./Login.css";

export const Login = () => {
    const {login} = useContext(AuthContext);

    const emailRef = useRef<HTMLInputElement|null>(null);
    const passwordRef = useRef<HTMLInputElement|null>(null);
    
    const loginHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const email = (emailRef.current as HTMLInputElement).value;
        const password = (passwordRef.current as HTMLInputElement).value;

        login(email, password);
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={loginHandler}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input ref={emailRef} type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input ref={passwordRef} type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};
