import { useEffect, useState } from "react";
import { API } from "../../constants/constants";
import "./SitePhotos.css";
import { useOutletContext } from "react-router-dom";

function Picture(url: string, label: string) {
    return (
        <img src={url} alt={label}/>
    )
}

export const SitePhotos = () => {

    const defaultGallery: IApiGallery = {
        photos: [],
        error: "",
    }

    const id = useOutletContext();
    const api = `${API.GALLERY}/${id}`;

    const [dataState, setDataState] = useState(defaultGallery.photos);

    useEffect(() => {
        fetch(api)
        .then((res) => res.json())
        .then((data : IApiGallery) => {
            if (data.error) {
                console.log("Error while getting data", data.error);
                return;
            }
            setDataState(data.photos);
        } )
    }, []);

    return (
        <>
            <h1>Our Photos</h1>
            <div className="photoContainer">
                {dataState.map((item) => Picture(item.url, item.label))}
            </div>
        </>
    );
};