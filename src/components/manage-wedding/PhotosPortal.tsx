import { useEffect, useReducer, useContext, useCallback } from "react";
import "./PhotosPortal.css";
import { galleryReducer } from "./reducers/GalleryReducer";
import { PhotoRow } from "./PhotoRow";
import { AuthContext } from "../../context/AuthContext";
import { API } from "../../constants/constants";

export const PhotosPortal = () => {
    const defaultPhoto: IGalleryItem = {
        label: "",
        url: "",
    };

    const initialState: IGalleryItem[] = [];

    const [state, dispatch] = useReducer(galleryReducer, initialState);
    const { site } = useContext(AuthContext);

    const fetchData = useCallback((site: string) => {
        fetch(`${API.GALLERY}/${site}`)
            .then((res) => res.json())
            .then((data: IApiGallery) => {
                if (data.error) {
                    console.log("Error while getting data", data.error);
                    return;
                }
                dispatch({ type: "fetch-data", newState: data.photos });
            })
            .catch((err) => console.log("Error getting guest data: ", err));
    }, []);

    /* Also updates the state with new data after the post */
    const postData = (site: string, state: IGalleryItem[]) => {
        const api = `${API.GALLERY}/${site}`;
        const body = JSON.stringify({ photos: state });
        fetch(api, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body,
        })
            .then((res) => res.json())
            .then((data: IApiGallery) => {
                if (data.error) {
                    console.log("Error while saving data", data.error);
                    return;
                }

                dispatch({ type: "fetch-data", newState: data.photos });
            })
            .catch((err) => console.log("Error saving guest data: ", err));
    };

    // Fetch once when component loads for the first time
    useEffect(() => {
        fetchData(site as string);
    }, [site, fetchData]);

    const saveHandler = () => {
        postData(site as string, state);
    };

    const deleteHandler = (rowId: number) => {
        dispatch({ type: "delete-row", rowId });
    };

    /* For Testing Only */
    useEffect(() => {
        //    console.log();
    }, [state]);

    return (
        <div className="gallery-portal-container">
            <h1 className="gallery-portal-heading">Photos Portal</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Label</th>
                        <th scope="col">Photo Url</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((photo, idx) => (
                        <PhotoRow
                            key={idx}
                            photo={photo}
                            idx={idx}
                            dispatch={dispatch}
                            deleteHandler={deleteHandler}
                        />
                    ))}
                </tbody>
            </table>

            <div className="control-buttons">
                <button
                    onClick={() => dispatch({ type: "add-row", payload: { ...defaultPhoto } })}
                    className="btn btn-primary"
                >
                    + Photo
                </button>
                <button className="btn btn-success" onClick={saveHandler}>
                    Save Changes
                </button>
            </div>
        </div>
    );
};
