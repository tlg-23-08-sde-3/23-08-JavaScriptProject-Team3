import { useEffect, useState } from "react";
import { API } from "../../constants/constants";
import "./SitePhotos.css";
import { useOutletContext } from "react-router-dom";

function Picture(url: string, label: string) {
    return (
        <>
        <div className="carousel-item active" >
            <img src={url} className="d-block w-100" style={{maxHeight:"700px", objectFit:"contain"}} alt={label}/>
        </div>
        </>
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
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                {dataState.map((item) => Picture(item.url, item.label))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    );
};