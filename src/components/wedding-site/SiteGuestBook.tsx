import "./SiteGuestBook.css";

export const SiteGuestBook = () => {
    return (
        <>
            <h2>Sign our virtual Guest Book!</h2>

            <form>
            <label htmlFor="name">Name:</label><br />
            <input type="text"/><br />
            <label htmlFor="comment">Comment:</label><br />
            <textarea/><br />
            <input type="submit" />
            </form>

            <h3>Comments:</h3>
            <div className="commentContainer"></div>
        </>
    );
};
