import "./WeddingSite.css";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import {API} from "../../constants/constants"

export const WeddingSite = () => {
    const { id } = useParams();

    const [siteHeaderState, setSiteHeaderState] = useState({name1:"", name2:"", date:""})

    useEffect( () => {
        fetch(`${API.WEDDING}/${id}`)
        .then((res) => res.json())
        .then((obj) => {
            setSiteHeaderState(() => ({name1:obj.name1, name2:obj.name2, date:obj.date}))
        });
        }, [id])


    return (
        <div className="wedding-page-container">
            <div className="wedding-page-title">
                <h1 className="site-header">{siteHeaderState.name1} & {siteHeaderState.name2}</h1>
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
