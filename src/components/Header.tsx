import logo from '../assets/logo.png'

function Header() {
    return (
        <div className="flex justify-between">
            <img src={logo} alt="Logotype" className="w-[180px]"/>
            <ul className="flex gap-4 md:gap-14">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>Subscribe</button>
        </div>
    );
}

export default Header;