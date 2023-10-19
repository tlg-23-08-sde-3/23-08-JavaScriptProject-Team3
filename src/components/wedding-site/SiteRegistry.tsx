import "./SiteRegistry.css";
import { useEffect, useState } from "react";
import { API } from "../../constants/constants";
import { useOutletContext } from "react-router-dom";

function Item(item : string, photo : string, url : string) {
    return (
        <>
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={photo} alt={item}/>
            <div className="card-body">
                <h5 className="card-title">{item}</h5>
                <a href={url} className="btn btn-primary custom" >Click to purchase!</a>
            </div>
        </div> 
        </>
    )
}


export const SiteRegistry = () => {

    const defaultRegistryCollection: IApiRegistry = {
        registry: [],
        error: "",
    }

    const id = useOutletContext();
    const api = `${API.REGISTRY}/${id}`;

    const [dataState, setDataState] = useState(defaultRegistryCollection.registry);

    useEffect(() => {
        fetch(api)
        .then((res) => res.json())
        .then((data : IApiRegistry) => {
            if(data.error) {
            console.log("Error while getting data", data.error);
            return;
            }
            setDataState(data.registry);
        })
    }, [api]);

    return (
        <>
           <h1 style={{fontFamily: "'Playfair Display', serif"}}>Our Registry</h1>
           <div className="item-container">
            {dataState.map((obj) => Item(obj.item, obj.photo, obj.url))}
            </div> 
        </>
    );
};