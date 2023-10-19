/*
    These types are available globally inside the project.
    DO NOT USE EXPORT AND IMPORT
*/

/*
 * Authentication Types
 */
interface IAuthUser {
    email: string | null;
    site: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

interface ILocalStorageAuthInfo {
    email: string | null;
    site: string | null;
}

/*
 * Global Types for API
 */

interface IApiUser {
    email?: string;
    password?: string;
    url?: string;
    error?: string;
}

interface IApiWedding {
    _id?: string;
    name1?: string;
    name2?: string;
    date?: string;
    venue?: string;
    image?: string;
    story?: string;
    error?: string;
}

interface IApiGuests {
    _id?: string;
    guests: IGuest[];
    error?: string;
}

// Single guest update API will only send whether the guest was updated or not (info), or guest not found (error).
interface IApiSingleGuestUpdate {
    info: string;
    error: string;
}

interface IApiGallery {
    _id?: string;
    photos: IGalleryItem[];
    error?: string;
}

interface IApiComments {
    _id?: string;
    comments: IComment[];
    error?: string;
}

interface IComment {
    _id?: string;
    name: string;
    comment: string;
}

interface IApiRegistry {
    _id?: string;
    registry: IRegistry[];
    error?: string;
}

/**
 * Guests Portal
 */

type Attending = "yes" | "no" | "pending";
type PlusOne = "yes" | "no";

interface IGuest {
    _id?: string;
    name: string;
    attending: Attending;
    plusOne: PlusOne;
}

type GuestAction =
    | { type: "fetch-data"; newState: IGuest[] }
    | { type: "add-row"; payload: IGuest }
    | { type: "update-name"; rowId: number; newName: string }
    | { type: "update-attending"; rowId: number; newStatus: Attending }
    | { type: "update-plusOne"; rowId: number; checked: boolean }
    | { type: "delete-row"; rowId: number };

/**
 * Gallery Portal
 */


interface IGalleryItem {
    _id?: string;
    label: string;
    url: string;
}

type GalleryAction =
    | { type: "fetch-data"; newState: IGalleryItem[] }
    | { type: "add-row"; payload: IGalleryItem }
    | { type: "update-label"; rowId: number; newLabel: string }
    | { type: "update-url"; rowId: number; newUrl: string }
    | { type: "delete-row"; rowId: number };

/**
 * Registry Portal
 */

interface IRegistry {
    _id?: string;
    item: string;
    photo: string;
    url: string;
}

type RegistryAction =
    | { type: "fetch-data"; newState: IRegistry[] }
    | { type: "add-row"; payload: IRegistry }
    | { type: "update-item"; rowId: number; newItem: string }
    | { type: "update-url"; rowId: number; newUrl: string }
    | { type: "update-photo"; rowId: number; newPhoto: string }
    | { type: "delete-row"; rowId: number };
