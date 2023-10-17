import "./SiteGuestBook.css";

function Comments(commenter: string, theComment: string) {
    return (
        <>
            <div style={{ borderStyle: "solid" }}>
                <p>From: {commenter}</p>
                <p>{theComment}</p>
            </div>
        </>
    );
}

const commentsArr: JSX.Element[] = [];

const response = window.fetch(`/whatever the comment route is`, {
    method: "GET",
});

interface Comment {
    name: string;
    comment: string;
}

// TODO: Uncomment after actual api endpoint has been added.
// response
//     .then((res) => {
//         return res.json();
//     })
//     .then((allComments: Comment[]) => {
//         allComments.forEach((elm) => {
//             const commenter = elm.name;
//             const theComment = elm.comment;
//             commentsArr.push(Comments(commenter, theComment));
//         });
//     });

export const SiteGuestBook = () => {
    return (
        <>
            <h2 className="guest-book-title">Sign our virtual Guest Book!</h2>

            <form className="commentForm">
                <label htmlFor="name">Name:</label>
                <br />
                <input type="text" />
                <br />
                <label htmlFor="comment">Comment:</label>
                <br />
                <textarea />
                <br />
                <input type="submit" onClick={sendComment} />
            </form>

            <h3 className="guest-book-title">Comments:</h3>
            <div className="commentContainer">{commentsArr.map((Comment) => Comment)}</div>
        </>
    );
};

function sendComment() {
    const formData = new FormData();
    //grab data from form
    //send data from form
    //reset form
}
