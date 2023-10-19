interface PhotoRowProps {
    photo: IGalleryItem;
    idx: number;
    dispatch: React.Dispatch<GalleryAction>;
    deleteHandler: (rowId: number) => void;
}

export const PhotoRow: React.FC<PhotoRowProps> = ({ photo, idx, dispatch, deleteHandler }) => {
    return (
        <tr>
            <th scope="row">{idx + 1}</th>
            <td>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Photo Label"
                    value={photo.label || `picture ${idx + 1}`}
                    onChange={(e) =>
                        dispatch({ type: "update-label", rowId: idx, newLabel: e.target.value })
                    }
                />
            </td>
            <td>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Photo URL"
                    value={photo.url}
                    onChange={(e) =>
                        dispatch({ type: "update-url", rowId: idx, newUrl: e.target.value })
                    }
                />
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => deleteHandler(idx)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};
