import "./Admin.css";
import { Link } from "react-router-dom";

export const Admin = () => {
    return (
        <div className=" admin-container">
            <div className="admin-page-title">
                <h1>His and Her Portal</h1>
            </div>
            <div className="admin-items fs-3">
                <div className="admin-item">
                    <Link to="/admin/wedding">Manage Your Website &gt;</Link>
                </div>
                <div className="admin-item">
                    <Link to="/admin/photos">Manage Your Photos &gt;</Link>
                </div>
                <div className="admin-item">
                    <Link to="/admin/guests">Manage Your Guest List &gt;</Link>
                </div>
                <div className="admin-item">
                    <Link to="/admin/registry">Manage Your Registry &gt;</Link>
                </div>
            </div>
        </div>
    );
};
