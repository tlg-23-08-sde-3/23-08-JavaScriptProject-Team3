/* API Endpoint */
/* Development Server */
// const SERVER = "http://localhost:3000";

/* Production Server */
const SERVER = "https://wedding-app-3nu8.onrender.com";

export const API = {
    USER: `${SERVER}/auth`,
    WEDDING: `${SERVER}/wedding`,
    GALLERY: `${SERVER}/gallery`,
    GUEST: `${SERVER}/guests`,
    REGISTRY: `${SERVER}/registry`,
    COMMENTS: `${SERVER}/comments`,
    SITE: `${SERVER}/site`,
} as const;

/* Local Storage Constants */
export const LOCAL_STORAGE = {
    EMAIL: "email",
    SITE: "site",
} as const;

