import { Outlet } from 'react-router-dom';
export const App = () => {

    return (
        <>
            <h1>HomePage</h1>
            <Outlet />
        </>
    );
};
