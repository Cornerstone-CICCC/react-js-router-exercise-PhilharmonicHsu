import { Outlet } from "react-router-dom"

export default function ProductLayout() {
    return <>
        <div className="flex flex-col flex-1">
            <Outlet />
        </div>
    </>
}