import "./SiteGuestBook.css";
import { useEffect, useState } from 'react';
import {useOutletContext} from "react-router-dom"
import {API} from "../../constants/constants"

function Comment(commenter: string, theComment: string) {
    return (
        <>
            <div style={{ borderStyle: "solid", borderColor: "#F4CEDD", color: "#276B80", backgroundColor: "#DDECE8"}}>
                <p>From: {commenter}</p>
                <p>{theComment}</p>
            </div>
        </>
    );
}

export const SiteGuestBook = () => {
    const id = useOutletContext();
    const api = `${API.COMMENTS}/${id}`;

    //Stuff that deals with loading the comments from the database
    const defaultComments: IApiComments = {
        comments: [],
        error: "",
    }

    const [dataState, setDataState] = useState(defaultComments.comments);

    useEffect(() => {
        fetch(api)
        .then((res) => res.json())
        .then((data: IApiComments) => {
            if (data.error) {
                console.log("Error while getting data", data.error);
                return;
            }
            setDataState(data.comments);
        })
    }, [api]);


    //Stuff that deals with updating the database
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = () => {

        const body = JSON.stringify({name, comment});

        fetch(`${API.COMMENTS}/${id}`, {
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
        })
        .catch((err) => console.log("Error posting the new comment: ", err));

    }

    //Stuff that is returned
    return (
        <>
            <h2 className="guest-book-title">Sign our virtual Guest Book!</h2>

            <form className="commentForm" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" onChange={(e) => setName(e.target.value)}/><br />
                <label htmlFor="comment">Comment:</label><br />
                <textarea onChange={(e) => setComment(e.target.value)}/><br />
                <input type="submit" />
            </form>

            <h3 className="guest-book-title">Comments:</h3>
            <div className="commentContainer">
                {dataState.map((item) => Comment(item.name, item.comment))}
            </div>
        
        </>
    );
};