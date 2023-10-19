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
                    <p>
                        With so much to do before your wedding day, you need a wedding website that
                        gets things done. See how a Elegant Weddings website can simplify your wedding
                        planning.
                    </p>
                    <div className="homepage-card-image">
                        <img src="website_builder.jpg" alt="all in one website builder" />
                    </div>
                </div>
            </div>
        </div>
    );
};
