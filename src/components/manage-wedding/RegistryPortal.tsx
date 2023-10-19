import { useEffect, useReducer, useContext, useCallback } from "react";
import "./RegistryPortal.css";
import { registryReducer } from "./reducers/RegistryReducer";
import { RegistryRow } from "./RegistryRow";
import { AuthContext } from "../../context/AuthContext";
import { API } from "../../constants/constants";

export const RegistryPortal = () => {
    const defaultItem: IRegistry = {
        item: "",
        photo: "",
        url: "",
    };

    const initialState: IRegistry[] = [];

    const [state, dispatch] = useReducer(registryReducer, initialState);
    const { site } = useContext(AuthContext);

    const fetchData = useCallback((site: string) => {
        fetch(`${API.REGISTRY}/${site}`)
            .then((res) => res.json())
            .then((data: IApiRegistry) => {
                if (data.error) {
                    console.log("Error while getting data", data.error);
                    return;
                }
                dispatch({ type: "fetch-data", newState: data.registry });
            })
            .catch((err) => console.log("Error getting guest data: ", err));
    }, []);

    /* Also updates the state with new data after the post */
    const postData = (site: string, state: IRegistry[]) => {
        const api = `${API.REGISTRY}/${site}`;
        const body = JSON.stringify({ registry: state });
        fetch(api, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body,
        })
            .then((res) => res.json())
            .then((data: IApiRegistry) => {
                if (data.error) {
                    console.log("Error while saving data", data.error);
                    return;
                }

                dispatch({ type: "fetch-data", newState: data.registry });
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
        <div className="registry-portal-container">
            <h1 className="registry-portal-heading">Registry Portal</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Photo</th>
                        <th scope="col">Product Link</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((registry, idx) => (
                        <RegistryRow
                            key={idx}
                            registry={registry}
                            idx={idx}
                            dispatch={dispatch}
                            deleteHandler={deleteHandler}
                        />
                    ))}
                </tbody>
            </table>

            <div className="control-buttons">
                <button
                    onClick={() => dispatch({ type: "add-row", payload: { ...defaultItem } })}
                    className="btn btn-primary"
                >
                    + Product
                </button>
                <button className="btn btn-success" onClick={saveHandler}>
                    Save Changes
                </button>
            </div>
        </div>
    );
};
