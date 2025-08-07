import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Nav from "../components/nav";


const Login = () => {
    const [employeeId, setEmployeeId] = useState("");
    const {  dispatch } = useAuth();
    const navigate =useNavigate();
    const handleLogin = () => {
        if (employeeId.trim() !== "") {
            dispatch({ type: "LOGIN" });
            navigate("/admin");
        }
    };

    return (
        <>
            <Nav />
            <div className="h-screen flex items-center justify-center bg-gray-100">
                <div className="flex items-center gap-2 bg-white p-4 rounded shadow">
                    <input
                        maxLength={10}
                        type="text"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        placeholder="Employee ID"
                        className="border px-3 py-1 rounded text-sm"
                    />
                    <button
                        onClick={handleLogin}
                        className="bg-blue-500 text-white px-4 py-1 rounded text-sm"
                    >
                       Login
                    </button>
                </div>
            </div></>

    );
};

export default Login;
