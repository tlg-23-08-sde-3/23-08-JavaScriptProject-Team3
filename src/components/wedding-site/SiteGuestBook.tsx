import "./SiteGuestBook.css";
import { useState } from 'react';

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
        const commenter = elm.name;
        const theComment = elm.comment;
        commentsArr.push(Comments(commenter,theComment));
    })
});

export const SiteGuestBook = () => {
    const [commenter, setCommenter] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = () => {
        //alert(`The name you entered was: ${commenter}`); //THIS WORKS
        //alert(`The comment you entered was: ${comment}`);//THIS WORKS

       window.fetch(`/whatever the comment route is`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
        body: JSON.stringify({"name":commenter, "comment":comment})
        })


    }

    return (
        <>
            <h2>Sign our virtual Guest Book!</h2>

            <form className="commentForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label><br />
            <input type="text" value={commenter} onChange={(e) => setCommenter(e.target.value)}/><br />
            <label htmlFor="comment">Comment:</label><br />
            <textarea value={comment} onChange={(e) => setComment(e.target.value)}/><br />
            <input type="submit" />
            </form>

            <h3>Comments:</h3>
            <div className="commentContainer">
               {commentsArr.map(Comment => Comment)}
            </div>
        </>
    );
};

//grab data from form
//send data from form
//reset form