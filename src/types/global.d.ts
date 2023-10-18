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
