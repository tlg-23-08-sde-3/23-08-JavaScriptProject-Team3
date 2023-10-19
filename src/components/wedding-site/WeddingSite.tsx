import "./WeddingSite.css";
import { useParams, NavLink, Outlet } from "react-router-dom";

export const WeddingSite = () => {
    const { id } = useParams();

    return (
        <div className="wedding-page-container">
            <div className="wedding-page-title">
                <h1>Wedding Page for {id}</h1>
            </div>
            <div className="wedding-nav-items">
                <div className="wedding-nav-item">
                    <NavLink to={`/site/${id}`} end>Home </NavLink>
                </div>
                <div className="wedding-nav-item">
                    <NavLink to={`/site/${id}/photos`}>Photos </NavLink>
                </div>
                <div className="wedding-nav-item">
                    <NavLink to={`/site/${id}/registry`}>Registry </NavLink>
                </div>
                <div className="wedding-nav-item">
                    <NavLink to={`/site/${id}/rsvp`}>RSVP </NavLink>
                </div>
                <div className="wedding-nav-item">
                    <NavLink to={`/site/${id}/guestbook`}>Guest Book </NavLink>
                </div>
            </div>

            <Outlet context={id} />
        </div>
    );
};

//todo: come back here after I finish API
