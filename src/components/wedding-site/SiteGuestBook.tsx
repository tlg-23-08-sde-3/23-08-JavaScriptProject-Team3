import "./SiteGuestBook.css";
import { useEffect, useState } from 'react';
import {useOutletContext} from "react-router-dom"
import {API} from "../../constants/constants"

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

export const SiteGuestBook = () => {

    //regular constants
    //const commentsArr: JSX.Element[] = [];//
    const id = useOutletContext();

    //states
    const [commenter, setCommenter] = useState("");
    const [comment, setComment] = useState("");
    const [commentData, setCommentData] = useState("");
    const [commentsArr, setCommentsArr] = useState([]);

    //interfaces
    interface Comment {
        name: string;
        comment: string;
    }

    useEffect( () => {
    const response = window.fetch(`${API.COMMENTS}/${id}`);
    response
    .then((res) => {
        return res.json();
    })
      .then( (obj) => {
        setCommentsArr([]);
        let theComments = obj.comments;
        theComments.forEach((elm:Comment) => {
            
            //commentsArr.push(Comments(elm.name, elm.comment))
            



        })
    });
    }, [])



    const handleSubmit = () => {
        alert(`The name you entered was: ${commenter}`); //THIS WORKS
        alert(`The comment you entered was: ${comment}`);//THIS WORKS

        //get the existing comment obj for this site and save it
        useEffect( () => {
        const resp = window.fetch(`${API.COMMENTS}/${id}`);
        resp
        .then((res) => {
            return res.json();
        })
          .then( data => {
            setCommentData(data)
        });
        }, [])
        //put the new commenter and comment Comment into the array in that obj

        console.log(commentData);
        
        
        //send back the full obj in the body of a post.

    }

    return (
        <>
            <h2 className="guest-book-title">Sign our virtual Guest Book!</h2>

            <form className="commentForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label><br />
            <input type="text" value={commenter} onChange={(e) => setCommenter(e.target.value)}/><br />
            <label htmlFor="comment">Comment:</label><br />
            <textarea value={comment} onChange={(e) => setComment(e.target.value)}/><br />
            <input type="submit" />
            </form>

            <h3 className="guest-book-title">Comments:</h3>
            <div className="commentContainer">{commentsArr.map((Comment) => Comment)}</div>
        
        </>
    );
};