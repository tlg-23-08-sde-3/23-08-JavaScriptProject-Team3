export const registryReducer = (state: IRegistry[], action: RegistryAction): IRegistry[] => {
    switch (action.type) {
        case "fetch-data":
            return [...action.newState];

        case "add-row":
            return [...state, { ...action.payload }];

        case "update-item":
            state[action.rowId]["item"] = action.newItem;
            return [...state];

        case "update-url": {
            state[action.rowId]["url"] = action.newUrl;
            return [...state];
        }

        case "update-photo": {
            state[action.rowId]["photo"] = action.newPhoto;
            return [...state];
        }

        case "delete-row":
            return state.filter((_, idx) => idx !== action.rowId);

        default:
            throw `Received unknown action: ${action}`;
    }
};
