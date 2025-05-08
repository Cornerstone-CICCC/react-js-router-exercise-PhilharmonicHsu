import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const location = useLocation();
    
    return <>
        <div className="flex flex-col h-screen">
            <nav className="bg-amber-500 py-4 px-10 flex gap-4 justify-end">
                {location.pathname !== "/" && <Link to="/">Home</Link>}
                <Link to="about">About</Link>
                <Link to="contact-us">Contact</Link>
                <Link to="products">Our Products</Link>
            </nav>
            <Outlet />
        </div>
    </>
}