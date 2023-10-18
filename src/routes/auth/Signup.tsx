import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../constants/constants";
import "./Signup.css";

export const Signup = () => {
    const navigate = useNavigate();
    const urlRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        const url = (urlRef.current as HTMLInputElement).value;
        const email = (emailRef.current as HTMLInputElement).value;
        const password = (passwordRef.current as HTMLInputElement).value;
        const fetchBody = { url, email, password };

        const signupApi = `${API.USER}/signup`;
        try {
            const response = await fetch(signupApi, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(fetchBody),
            });

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            const data: IApiUser = await response.json();

            if (data.error) {
                alert(`Error signing up: ${data.error}`);
                console.error("Error: ", data.error);
            } else {
                navigate("/login");
            }
        } catch (e) {
            console.error(`Error fetching ${signupApi}: `, e);
        }
    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <div className="mb-3">
                    <label htmlFor="url" className="form-label">
                        Website Name
                    </label>
                    <input
                        name="url"
                        type="text"
                        className="form-control"
                        id="url"
                        ref={urlRef}
                        aria-describedby="urlHelpBlock"
                        pattern="[\-a-z0-9]{3,}"
                        required
                    />
                    <div id="urlHelpBlock" className="form-text">
                        Must be alphanumeric and lowercase characters. Can contain dash "-" as word
                        separator. Must not contain any spaces. Ex. tom-and-julie
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        name="email"
                        ref={emailRef}
                        type="email"
                        className="form-control"
                        id="email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        name="password"
                        ref={passwordRef}
                        type="password"
                        className="form-control"
                        id="password"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};
