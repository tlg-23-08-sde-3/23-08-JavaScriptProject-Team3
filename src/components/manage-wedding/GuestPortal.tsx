import { useEffect, useReducer, useContext, useCallback } from "react";
import "./GuestPortal.css";
import { guestReducer } from "./reducers/GuestReducer";
import { GuestRow } from "./GuestRow";
import { AuthContext } from "../../context/AuthContext";
import { API } from "../../constants/constants";

export const GuestPortal = () => {
    const defaultGuest: IGuest = {
        name: "",
        attending: "pending",
        plusOne: "no",
    };

    const initialState: IGuest[] = [];

    const [state, dispatch] = useReducer(guestReducer, initialState);
    const { site } = useContext(AuthContext);

    
    const fetchLatestGuests = useCallback((site: string) => {
        fetch(`${API.GUEST}/${site}`)
            .then((res) => res.json())
            .then((data: IApiGuests) => {
                if (data.error) {
                    console.log("Error while getting data", data.error);
                    return;
                }
                dispatch({ type: "fetch-data", newState: data.guests });
            })
            .catch((err) => console.log("Error getting guest data: ", err));
    }, []);

    /* Also updates the state with new data after the post */
    const postLatestGuests = (site: string, state: IGuest[]) => {
        const api = `${API.GUEST}/${site}`;
        const body = JSON.stringify({ guests: state });
        fetch(api, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    console.log("Error while saving data", data.error);
                    return;
                }

                dispatch({ type: "fetch-data", newState: data.guests });
            })
            .catch((err) => console.log("Error saving guest data: ", err));
    };

    // Fetch once when component loads for the first time
    useEffect(() => {
        fetchLatestGuests(site as string);
    }, [site, fetchLatestGuests]);

    const saveHandler = () => {
        postLatestGuests(site as string, state);
    };

    const deleteHandler = (rowId: number) => {
        dispatch({ type: "delete-row", rowId });
    };

    /* For Testing Only */
    useEffect(() => {
        // console.log(`🚀 ~ file: GuestPortal.tsx:72 ~ useEffect ~ state:`, state);
    }, [state]);

    return (
        <div className="guest-portal-container">
            <h1 className="guest-portal-heading">Guest Portal</h1>
            <div className="guest-stats">
                <p><strong>Total: </strong>{state.length} </p>
                <p><strong>Attending: </strong>{state.filter(guest => guest.attending === "yes").length}</p>
                <p><strong>Not Attending: </strong>{state.filter(guest => guest.attending === "no").length}</p>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Guest Name</th>
                        <th scope="col">RSVP Status</th>
                        <th scope="col">Plus One</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((guest, idx) => (
                        <GuestRow
                            key={idx}
                            guest={guest}
                            idx={idx}
                            dispatch={dispatch}
                            deleteHandler={deleteHandler}
                        />
                    ))}
                </tbody>
            </table>

            <div className="guest-portal-control-buttons">
                <button
                    onClick={() => dispatch({ type: "add-row", payload: { ...defaultGuest } })}
                    id="add-guest-button"
                    className="btn btn-primary"
                >
                    + Guest
                </button>
                <button className="btn btn-success" onClick={saveHandler}>
                    Save Changes
                </button>
            </div>
        </div>
    );
};
