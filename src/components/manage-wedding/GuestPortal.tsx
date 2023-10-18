import "./GuestPortal.css";

const data = {
    id1: {
        name: "Hugh Jackman",
        rsvp: "Attending",
        plusOne: "yes",
    },
    id2: {
        name: "John Doe",
        rsvp: "Pending",
        plusOne: "no",
    },
};

console.log(data);

export const GuestPortal = () => {
    return (
        <div className="guest-portal-container">
            <h1 className="guest-portal-heading">Guest Portal</h1>
        </div>
    );
};
