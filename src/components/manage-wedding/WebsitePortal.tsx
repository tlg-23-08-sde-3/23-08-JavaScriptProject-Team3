import { useRef, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { API } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import "./WebsitePortal.css";

export const WebsitePortal = () => {
    const navigate = useNavigate();
    const { site } = useContext(AuthContext);

    const name1Ref = useRef<HTMLInputElement | null>(null);
    const name2Ref = useRef<HTMLInputElement | null>(null);
    const dateRef = useRef<HTMLInputElement | null>(null);
    const venueRef = useRef<HTMLInputElement | null>(null);
    const imageRef = useRef<HTMLInputElement | null>(null);
    const storyRef = useRef<HTMLTextAreaElement | null>(null);

    // Update data once on initial Load
    useEffect(() => {
        const api = `${API.WEDDING}/${site}`;

        fetch(api)
            .then((res) => res.json())
            .then((data: IApiWedding) => {
                if (data.error) {
                    console.log("Error getting wedding data: ", data.error);
                    return;
                }

                const { name1, name2, date, venue, image, story } = data;

                if (name1) (name1Ref.current as HTMLInputElement).value = name1;
                if (name2) (name2Ref.current as HTMLInputElement).value = name2;
                if (date) (dateRef.current as HTMLInputElement).value = date;
                if (venue) (venueRef.current as HTMLInputElement).value = venue;
                if (image) (imageRef.current as HTMLInputElement).value = image;
                if (story) (storyRef.current as HTMLTextAreaElement).value = story;
            })
            .catch((err) => {
                console.log(err);
            });
    }, [site]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const name1 = (name1Ref.current as HTMLInputElement).value;
        const name2 = (name2Ref.current as HTMLInputElement).value;
        const date = (dateRef.current as HTMLInputElement).value;
        const venue = (venueRef.current as HTMLInputElement).value;
        const image = (imageRef.current as HTMLInputElement).value;
        const story = (storyRef.current as HTMLTextAreaElement).value;

        const body = { name1, name2, date, venue, image, story };
        const api = `${API.WEDDING}/${site}`;

        let data: IApiWedding = {};

        try {
            const response = await fetch(api, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            data = await response.json();
        } catch (e) {
            console.error(`Error fetching ${api}: `, e);
            return;
        }

        if (data.error) {
            alert(`Error Logging in: ${data.error}`);
            console.error("Error: ", data.error);
            return;
        }

        console.log("Wedding details updated successfully.");

        navigate("/admin");
    };

    return (
        <div className="website-portal-container">
            <div className="portal-title">
                <h1>Website Portal</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name1" className="form-label">
                        Partner 1 - First Name
                    </label>
                    <input
                        ref={name1Ref}
                        type="text"
                        className="form-control"
                        id="name1"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name2" className="form-label">
                        Partner 2 - First Name
                    </label>
                    <input
                        ref={name2Ref}
                        type="text"
                        className="form-control"
                        id="name2"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                        Wedding Date
                    </label>
                    <input ref={dateRef} type="date" className="form-control" id="date" />
                </div>
                <div className="mb-3">
                    <label htmlFor="venue" className="form-label">
                        Venue
                    </label>
                    <input ref={venueRef} type="text" className="form-control" id="venue" />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                        Photo URL
                    </label>
                    <input ref={imageRef} type="url" className="form-control" id="image" />
                </div>
                <div className="mb-3">
                    <label htmlFor="story" className="form-label">
                        Tell us your story
                    </label>
                    <textarea ref={storyRef} className="form-control" id="story"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                    Add / Update
                </button>
            </form>
        </div>
    );
};
