import HeaderD from "./pages/header";
import Sidebar from "./pages/sidebarD";
import Form from "./pages/form";

const Admin = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderD />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 p-4">
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Admin;