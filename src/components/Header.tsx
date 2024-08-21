import logo from '../assets/logo.png'
import { FaTelegram } from "react-icons/fa";

function Header() {
    return (
        <div className="flex justify-between items-center mt-3">
            <img src={logo} alt="Logotype" className="w-[180px]"/>
            <ul className="flex gap-4 md:gap-14">
                <li className="hover:font-bold cursor-pointer">Home</li>
                <li className="hover:font-bold cursor-pointer">About</li>
                <li className="hover:font-bold cursor-pointer">Contact</li>
            </ul>
            <button className="bg-blue-500 rounded-full text-white flex items-center">
                <FaTelegram className="mr-2 text-[20px]" /> Telegram
            </button>
        </div>
    );
}

export default Header;