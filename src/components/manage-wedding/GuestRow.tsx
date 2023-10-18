interface GuestRowProps {
    guest: IGuest;
    idx: number;
    dispatch: React.Dispatch<GuestAction>;
    deleteHandler: (rowId: number) => void;
}

export const GuestRow: React.FC<GuestRowProps> = ({ guest, idx, dispatch, deleteHandler }) => {
    // debugger;
    return (
        <tr>
            <th scope="row">{idx + 1}</th>
            <td>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Guest Name"
                    value={guest.name}
                    onChange={(e) =>
                        dispatch({ type: "update-name", rowId: idx, newName: e.target.value })
                    }
                />
            </td>
            <td>
                <select
                    className="form-select"
                    value={guest.attending}
                    onChange={(e) => {
                        dispatch({
                            type: "update-attending",
                            rowId: idx,
                            newStatus: e.target.value as Attending,
                        });
                    }}
                >
                    <option value="pending">Pending</option>
                    <option value="yes">Attending</option>
                    <option value="no">Not Attending</option>
                </select>
            </td>
            <td className="plus-one-checkbox">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={guest.plusOne === "yes"}
                    onChange={(e) => {
                        dispatch({
                            type: "update-plusOne",
                            rowId: idx,
                            checked: e.target.checked,
                        });
                    }}
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
