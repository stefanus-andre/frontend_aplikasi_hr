import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {

    const [username, setUsername] =  useState("");
    const [password, setPassword] =  useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError();

        try {
            const response = await axios.post("", {
                username,
                password
            });

            if (response.data.success) {
                localStorage.setItem("token", response.data.token);

                navigate("/user/dashboad/dashboard");
            } else {
                setError("Invalid credentials. Coba Lagi");
            }

        } catch (error) {
            setError("Login failed. Please check your credentials");
        }

    };


    const currentYear = new Date().getFullYear();

    return(
        <>
            <div className="login-form">
                <div className="flex justify-center items-center h-screen bg-gray-700">
                    <div className="w-full max-w-xs">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Username
                                </label>
                                <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"  />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                    Password
                                </label>
                                    <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                                    <p className="text-red-500 text-xs italic">Choose a password</p>
                            </div>

                            {error && <p className="text-red-500 text-xs italic">{error}</p>}

                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Sign In
                                </button>
                                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                        <p className="text-center text-gray-500 text-xs">
                            &copy; {currentYear} Stefanus Development. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}