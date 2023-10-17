import "./SiteRsvp.css";

export const SiteRsvp = () => {
    return (
        <>
            <h1>RSVP</h1>

                <p>Enter your name below to RSVP to the event:</p>
                <label htmlFor="name">Full Name:</label>
                <input type="text"></input>

                <p>If you will be attending, please check the following box. If you are not able to attend, please leave the box unchecked.</p>
                <label htmlFor="attending">I'll be there!</label>
                <input type="checkbox"></input>

                <p>If you were granted a +1, and if you are bringing a +1, please check the following box. If you were not given a +1, or if you are not brining a guest, please leave the box unchecked.</p>
                <label htmlFor="plusOne">I'm bringing a guest</label>
                <input type="checkbox"></input>

                <input type="submit"></input>
        </>
    );
};
