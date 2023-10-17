/* API Endpoint */
const SERVER = "http://localhost:3000";

const API = {
    USER: `${SERVER}/auth`,
    WEDDING: `${SERVER}/wedding`,
    GALLERY: `${SERVER}/gallery`,
    GUEST: `${SERVER}/guest`,
    REGISTRY: `${SERVER}/registry`,
    COMMENTS: `${SERVER}/comments`,
} as const;

/* Local Storage Constants */
export const LS_EMAIL = "weddingEmail";
