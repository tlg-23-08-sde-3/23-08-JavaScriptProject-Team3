import "./SitePhotos.css";

function Picture(url: string) {
    return (
        <img src={url}/>
    )
}

interface Picture {
    url: string;
}

const picArr: JSX.Element[] = [];

const response = fetch(`getphotoapi route asap`)
//do the thing
//for each
//put a Picture(url) in picArr

export const SitePhotos = () => {
    return (
        <>
            <h1>Our Photos</h1>
            <div className="photoContainer">
                {picArr.map((Picture) => Picture)}
            </div>
        </>
    );
};

//todo come back here after I write API