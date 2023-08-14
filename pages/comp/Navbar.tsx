// components/Navbar.tsx
//HEJSA MED DIG
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <img src="https://media.discordapp.net/attachments/1008406017903706163/1131009951754629170/politi.png" className="w-25 h-10" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <div className="dropdown dropdown-bottom">
                        <label tabIndex={0} className="btn m-1">Kriminlaregister</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Søg i kr</a></li>
                            <li><a>Opret til kr</a></li>
                        </ul>
                    </div>

                    <li><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>Flådestyring</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
