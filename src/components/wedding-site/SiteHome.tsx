import "./SiteHome.css";
import {API} from "../../constants/constants"
import {useOutletContext} from "react-router-dom"
import { useEffect, useState } from "react";

export const SiteHome = () => {


    const [siteHomeState, setSiteHomeState] = useState({story:"", weddate:"", venue:""}) 

    const id = useOutletContext();
    
    useEffect( () => {
    fetch(`${API.WEDDING}/${id}`)
    .then((res) => res.json())
    .then((obj) => {
        setSiteHomeState(() => ({story:obj.story, weddate:obj.date, venue:obj.venue}))
    });
    }, [])

    return (
        <>
            <h2 className="sitehome-h2">💗Our Love Story💗</h2>
            <p className="storyContainer">{siteHomeState.story}</p>
            <h2 className="sitehome-h2">📅Wedding Date:📅</h2>
            <p className="dateContainer">{siteHomeState.weddate}</p>
            <h2 className="sitehome-h2">💒Venue:💒</h2>
            <p className="venueContainer">{siteHomeState.venue}</p>
        </>
    );
};


//todo: make return work