import "./Admin.css";
import { Link } from "react-router-dom";

export const Admin = () => {
    return (
        <div className=" admin-container">
            <div className="admin-page-title">
                <h1>Wedding Admin Portal</h1>
            </div>
            <div className="admin-items fs-3">
                <div className="admin-item">
                    <Link to="/admin/wedding">Manage <strong>Website</strong></Link>
                </div>
                <div className="admin-item">
                    <Link to="/admin/photos">Manage <strong>Photos</strong></Link>
                </div>
                <div className="admin-item">
                    <Link to="/admin/guests">Manage <strong>Guest List</strong></Link>
                </div>
                <div className="admin-item">
                    <Link to="/admin/registry">Manage <strong>Registry</strong></Link>
                </div>
            </div>
        </div>
    );
};
