export const reducer = (state: IGuest[], action: GuestAction): IGuest[] => {
    switch (action.type) {
        case "fetch-data":
            return [...action.newState];

        case "add-row":
            return [...state, { ...action.payload }];

        case "update-name":
            state[action.rowId]["name"] = action.newName;
            return [...state];

        case "update-attending": {
            state[action.rowId]["attending"] = action.newStatus;
            return [...state];
        }

        case "update-plusOne":
            state[action.rowId]["plusOne"] = action.checked ? "yes" : "no";
            return [...state];

        case "delete-row":
            return state.filter((_, idx) => idx !== action.rowId);

        default:
            throw `Received unknown action: ${action}`;
    }
};
