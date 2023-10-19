export const galleryReducer = (state: IGalleryItem[], action: GalleryAction): IGalleryItem[] => {
    switch (action.type) {
        case "fetch-data":
            return [...action.newState];

        case "add-row":
            return [...state, { ...action.payload }];

        case "update-label":
            state[action.rowId]["label"] = action.newLabel;
            return [...state];

        case "update-url": {
            state[action.rowId]["url"] = action.newUrl;
            return [...state];
        }

        case "delete-row":
            return state.filter((_, idx) => idx !== action.rowId);

        default:
            throw `Received unknown action: ${action}`;
    }
};
