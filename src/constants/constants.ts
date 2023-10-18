/* API Endpoint */
const SERVER = "http://localhost:3000";

export const API = {
    USER: `${SERVER}/auth`,
    WEDDING: `${SERVER}/wedding`,
    GALLERY: `${SERVER}/gallery`,
    GUEST: `${SERVER}/guest`,
    REGISTRY: `${SERVER}/registry`,
    COMMENTS: `${SERVER}/comments`,
    SITE: `${SERVER}/site`,
} as const;

/* Local Storage Constants */
export const LOCAL_STORAGE = {
    EMAIL: "email",
    SITE: "site",
} as const;

