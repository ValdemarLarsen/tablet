// components/Navbar.tsx
//HEJSA MED DIG
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <img src="https://media.discordapp.net/attachments/1008406017903706163/1131009951754629170/politi.png" className="w-20 h-10"/>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <div className="dropdown dropdown-bottom">
                            <label tabIndex={0} className="btn m-1">Click</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
