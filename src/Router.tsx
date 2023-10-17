import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// Components
import { App } from "./routes/App";
import { AuthContextProvider } from "./context/AuthContextProvider";
import { Login } from "./routes/auth/Login";
import { Homepage } from "./routes/Homepage";
import { ErrorPage } from "./routes/ErrorPage";
import { Signup } from "./routes/auth/Signup";
import { WeddingSite } from "./components/wedding-site/WeddingSite";
import { Admin } from "./components/manage-wedding/Admin";

/* Authenticated Admin Portal Routes */
import { ProtectedRoute } from "./routes/auth/ProtectedRoute";
import { WebsitePortal } from "./components/manage-wedding/WebsitePortal";
import { PhotosPortal } from "./components/manage-wedding/PhotosPortal";
import { GuestPortal } from "./components/manage-wedding/GuestPortal";
import { RegistryPortal } from "./components/manage-wedding/RegistryPortal";

/* Public Site Routes */
import { SiteHome } from "./components/wedding-site/SiteHome";
import { SitePhotos } from "./components/wedding-site/SitePhotos";
import { SiteRsvp } from "./components/wedding-site/SiteRsvp";
import { SiteGuestBook } from "./components/wedding-site/SiteGuestBook";
import { SiteRegistry } from "./components/wedding-site/SiteRegistry";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={
                    <AuthContextProvider>
                        <App />
                    </AuthContextProvider>
                }
                errorElement={<ErrorPage />}
            >
                <Route index element={<Homepage />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />

                {/* Wrap authenticated pages in <ProtectedRoute /> Wrapper */}
                <Route path="/admin" element={<ProtectedRoute />}>
                    <Route index element={<Admin />} />
                    <Route path="wedding" element={<WebsitePortal />} />
                    <Route path="photos" element={<PhotosPortal />} />
                    <Route path="guests" element={<GuestPortal />} />
                    <Route path="registry" element={<RegistryPortal />} />
                </Route>
            </Route>

            <Route path="/site/:id" element={<WeddingSite />}>
                <Route index element={<SiteHome />} />
                <Route path="photos" element={<SitePhotos />} />
                <Route path="registry" element={<SiteRegistry />} />
                <Route path="rsvp" element={<SiteRsvp />} />
                <Route path="guestbook" element={<SiteGuestBook />} />
            </Route>
        </>
    )
);
