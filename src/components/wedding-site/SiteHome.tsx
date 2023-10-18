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
            <h2 className="sitehome-h2">Our Love Story</h2>
            <p className="storyContainer">{siteHomeState.story}</p>
            <h2 className="sitehome-h2">Wedding Date:</h2>
            <h4 className="dateContainer">{siteHomeState.weddate}</h4>
            <h2 className="sitehome-h2">Venue:</h2>
            <h4 className="">{siteHomeState.venue}</h4>
        </>
    );
};


//todo: make return work