import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import "./ErrorPage.css";

export const ErrorPage = () => {
    const error = useRouteError();
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        // error is type `ErrorResponse`
        errorMessage = error.data.message || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === "string") {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = "Unknown error";
    }

    return (
        <div id="error-page">
            <div>
                <h1>Oops!</h1>
                <p>
                    <i>{errorMessage}</i>
                </p>
                <p>Sorry! This page doesn't exist!</p>
            </div>
        </div>
    );
};
