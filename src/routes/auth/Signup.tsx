
import './Signup.css'

export const Signup = () => {
    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form >
                <div className="mb-3">
                    <label htmlFor="url" className="form-label">
                        Website Name
                    </label>
                    <input type="text" className="form-control" id="url" aria-describedby='urlHelpBlock' pattern='[\-a-z0-9]{3,}' required />
                    <div id="urlHelpBlock" className='form-text'>
                        Must be alphanumeric and lowercase characters. Can contain dash "-" as word separator. Must not contain any spaces. Ex. tom-and-julie
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input type="email" className="form-control" id="email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control" id="password" required />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};
