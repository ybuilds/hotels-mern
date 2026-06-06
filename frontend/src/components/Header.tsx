import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-blue-800 py-6 px-3">
            <div className="container px-40 mx-auto flex justify-between">
                <span className="text-3xl text-white font-bold tracking-tight">
                    <Link to={"/"}>ElegantHolidays.in</Link>
                </span>

                <div className="flex gap-4">
                    <span className="flex space-x-2">
                        <Link className="flex items-center rounded bg-white text-blue-600 px-4 font-bold hover:bg-gray-100 hover:text-blue-800 transition" to={"/sign-in"}>Log In</Link>
                    </span>
                    <span className="flex space-x-2">
                        <Link className="flex items-center rounded bg-white text-blue-600 px-4 font-bold hover:bg-gray-100 hover:text-blue-800 transition" to={"/sign-in"}>Sign In</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;