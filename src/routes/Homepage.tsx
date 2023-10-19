import { Link } from "react-router-dom";
import "./Homepage.css";

export const Homepage = () => {
    return (
        <div className="homepage-container">
            <h1 className="homepage-main-heading">Elegant Weddings</h1>
            <div className="homepage-image-container">
                <img src="homepage_hero.jpg" alt="homepage wedding image" />
            </div>
            <div className="homepage-card">
                <h1 className="homepage-card-heading">All-In-One Wedding Website Builder</h1>

                <div className="homepage-card-details">
                    <div className="homepage-pitch">
                        With so much to do before your wedding day, you need a wedding website that
                        gets things done. See how an <strong>Elegant Weddings</strong> website can
                        simplify your wedding planning.{" "}
                        <Link className="link-secondary" to="/signup">
                            Sign Up
                        </Link>{" "}
                        to get started.
                        <p style={{ marginTop: "0.5em" }}>
                            Already have an account{" "}
                            <Link className="link-secondary" to="/login">
                                Login Here
                            </Link>
                        </p>
                    </div>

                    <div className="homepage-card-image">
                        <img src="website_builder.jpg" alt="all in one website builder" />
                    </div>
                </div>
            </div>

            <div className="features-container">
                <div className="features-image">
                    <img src="./rsvp.jpg"></img>
                    <h1>RSVP Management</h1>
                </div>
                <div className="features-image">
                    <img src="./registry.jpg"></img>
                    <h1>Wedding Registry</h1>
                </div>
                <div className="features-image">
                    <img src="./gallery.jpg"></img>
                    <h1>
                        Photo
                        <br /> Gallery
                    </h1>
                </div>
            </div>

            <footer className="homepage-footer">
                <p>copyright © 2023 Elegant Weddings, Inc. All right reserved </p>
            </footer>
        </div>
    );
};
