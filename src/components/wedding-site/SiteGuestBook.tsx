import "./SiteGuestBook.css";

function Comments(commenter:string, theComment:string) {

    return (
        <>
        <div style={{borderStyle:"solid"}}>
            <p>From: {commenter}</p>
            <p>{theComment}</p>
        </div>
        </>
    );
    
};

const commentsArr:any[] = [];

const response = window.fetch(`/whatever the comment route is`, {
    method: 'GET',
})
response.then((res) => {
    return res.json();
})
.then((allComments) => {
    allComments.forEach((elm:any) => {
        let commenter = elm.name;
        let theComment = elm.comment;
        commentsArr.push(Comments(commenter,theComment));
    })
});

export const SiteGuestBook = () => {
    return (
        <>
            <h2>Sign our virtual Guest Book!</h2>

            <form className="commentForm">
            <label htmlFor="name">Name:</label><br />
            <input type="text"/><br />
            <label htmlFor="comment">Comment:</label><br />
            <textarea/><br />
            <input type="submit" onClick={sendComment}/>
            </form>

            <h3>Comments:</h3>
            <div className="commentContainer">
               {commentsArr.map(Comment => Comment)}
            </div>
        </>
    );
};


function sendComment() {

let formData = new FormData();
//grab data from form
//send data from form
//reset form







}