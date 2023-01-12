// import Navbar from '../navbar';
import { Outlet } from 'react-router-dom'
import './layout.scss';

const Layout = () => {
    return (
        <>
            <div className="App">
                {/* <Navbar /> */}

                <Outlet />
            </div>
        </>
    )
}

export default Layout;
