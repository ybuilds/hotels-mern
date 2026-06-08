import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-blue-800">
            <div className="container px-40 mx-auto flex justify-between items-center py-10">
                <span className="text-3xl text-white font-bold tracking-tight">
                    <Link to={"/"}>ElegantHolidays.in</Link>
                </span>

                <div className="flex gap-4">
                    <span className="flex space-x-2">
                        <Link className="flex items-center text-white px-4 font-bold transition" to={"/privacy"}>Privacy Policy</Link>
                    </span>
                    <span className="flex space-x-2">
                        <Link className="flex items-center text-white px-4 font-bold transition" to={"/terms"}>Terms of Service</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;