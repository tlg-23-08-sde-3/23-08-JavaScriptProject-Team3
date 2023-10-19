import { useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../constants/constants";
import "./SiteRsvp.css";

interface IRsvpState {
    name: string;
    attending: "yes" | "no";
    plusOne: boolean;
    infoMessage?: string | null;
    errorMessage?: string | null;
}

interface IRsvpApiBody {
    name: string;
    attending: "yes" | "no";
    plusOne: "yes" | "no";
}

interface IRsvpApiResponse {
    info?: string;
    error?: string;
}

export const SiteRsvp = () => {
    const { id: site } = useParams();
    const [state, setState] = useState<IRsvpState>({
        name: "",
        attending: "no",
        plusOne: false,
        infoMessage: null,
        errorMessage: null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!state) return console.error("RSVP state is null");

        const api = `${API.GUEST}/update/${site}`;

        const body: IRsvpApiBody = {
            name: state.name,
            attending: state.attending,
            plusOne: state.plusOne ? "yes" : "no",
        };

        fetch(api, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((res) => res.json())
            .then((data: IRsvpApiResponse) => {
                if (data.error) {
                    setState({ ...state, errorMessage: data.error, infoMessage: null });
                }

                if (data.info) {
                    setState({ ...state, infoMessage: data.info, errorMessage: null });
                }
            })
            .catch((err) => console.error("Error updating RSVP: ", err));
    };

    return (
        <>
            <h1 className="rsvp-h1" style={{fontFamily: "'Playfair Display', serif"}}>RSVP</h1>

            <form className="rsvp-form" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="nameHelp"
                        value={state.name}
                        onChange={(e) =>
                            setState({
                                ...state,
                                name: e.target.value,
                                infoMessage: null,
                                errorMessage: null,
                            })
                        }
                        required
                    />
                    <div id="nameHelp" className="form-text">
                        Enter your full name to RSVP to the event.
                    </div>
                </div>

                {/* RSVP Options */}
                <div className="mb-3">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="RsvpOptions"
                            id="RsvpYes"
                            value="yes"
                            onChange={() =>
                                setState({
                                    ...state,
                                    attending: "yes",
                                    infoMessage: null,
                                    errorMessage: null,
                                })
                            }
                            required
                        />
                        <label className="form-check-label" htmlFor="inlineRadio1">
                            I'll be there
                        </label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="RsvpOptions"
                            id="RsvpNo"
                            onChange={() =>
                                setState({
                                    ...state,
                                    attending: "no",
                                    infoMessage: null,
                                    errorMessage: null,
                                })
                            }
                            value="no"
                        />
                        <label className="form-check-label" htmlFor="inlineRadio2">
                            Regretfully Decline
                        </label>
                    </div>
                </div>

                {/* Plus One */}
                <div className="mb-3">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="plusOne"
                            checked={state.plusOne}
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    plusOne: e.target.checked,
                                    infoMessage: null,
                                    errorMessage: null,
                                })
                            }
                            aria-describedby="plusOneHelp"
                        />
                        <label className="form-check-label" htmlFor="plusOne">
                            I'm bringing a guest
                        </label>
                    </div>

                    <div id="plusOneHelp" className="form-text">
                        If you were granted a +1, and if you are bringing a +1, please check the
                        following box. If you were not given a +1, or if you are not brining a
                        guest, please leave the box unchecked.
                    </div>
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>

                    {/* Info message, if any */}
                    {state.infoMessage ? (
                        <p className="rsvp-info-message text-success fw-semibold">
                            Success: {state.infoMessage}
                        </p>
                    ) : null}

                    {/* Error message, if any */}
                    {state.errorMessage ? (
                        <p className="rsvp-error-message text-danger fw-semibold">
                            Error: {state.errorMessage}
                        </p>
                    ) : null}
                </div>
            </form>
        </>
    );
};
