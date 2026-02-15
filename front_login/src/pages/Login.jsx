import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [frmdata, setfrmdata] = useState({});
    const navigate = useNavigate();

    const handleinput = (e) => {
        let { name, value } = e.target;
        console.log(value);
        setfrmdata({ ...frmdata, [name]: value })
    }

    const handlesubmit = () => {
        console.log("my vlues: ", frmdata);

        if (frmdata.name.trim() === "") {
            alert("Name is required");
        }

        else if (!/^[A-Za-z\s]+$/.test(frmdata.name)) {
            alert("Name should contain only letters");
        }

        else if (frmdata.email.trim() === "") {
            alert("Email is required");
        }

        else if (!frmdata.email.includes("@") || !frmdata.email.includes(".com")) {
            alert("Enter a valid email");
        }

        else if (frmdata.name == "admin" && frmdata.email == "admin@gmail.com") {
            navigate("/dashboard");
            alert("Login Successful");
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-400 px-4">

            <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-lg">

                <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-600 mb-6">
                    Login
                </h2>

                {/* Name Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1 text-sm sm:text-base">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleinput}
                    />
                </div>

                {/* Email Field */}
                <div className="mb-6">
                    <label className="block text-gray-700 mb-1 text-sm sm:text-base">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleinput}
                    />
                </div>

                {/* Button */}
                <button
                    className="w-full bg-blue-500 text-white py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-blue-600 transition duration-300"
                    onClick={handlesubmit}
                >
                    Login
                </button>

                <p className="text-xs sm:text-sm text-center text-gray-500 mt-4">
                    Login to our website to get exciting offers and deals on best collections.
                </p>

            </div>
        </div>
    );

};

export default Login;
