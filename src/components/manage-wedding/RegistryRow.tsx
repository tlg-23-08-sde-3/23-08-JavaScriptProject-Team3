interface RegistryRowProps {
    registry: IRegistry;
    idx: number;
    dispatch: React.Dispatch<RegistryAction>;
    deleteHandler: (rowId: number) => void;
}

export const RegistryRow: React.FC<RegistryRowProps> = ({
    registry,
    idx,
    dispatch,
    deleteHandler,
}) => {
    return (
        <tr>
            <th scope="row">{idx + 1}</th>
            <td>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Item Name"
                    value={registry.item}
                    onChange={(e) =>
                        dispatch({ type: "update-item", rowId: idx, newItem: e.target.value })
                    }
                />
            </td>
            <td>
                <input
                    type="url"
                    className="form-control"
                    placeholder="Product Photo"
                    value={registry.photo}
                    onChange={(e) =>
                        dispatch({ type: "update-photo", rowId: idx, newPhoto: e.target.value })
                    }
                />
            </td>
            <td>
                <input
                    type="url"
                    className="form-control"
                    placeholder="Product URL"
                    value={registry.url}
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
