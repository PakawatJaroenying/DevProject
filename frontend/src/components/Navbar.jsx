import { Link } from "react-router-dom";
import { FaRegHeart, FaBars } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import avatar from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const cartItem = useSelector(state => state.cart.cartItem);

    const { currentUser, logout } = useAuth();

    const handleLogOut = () => {
        logout();
    };

    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6 font-primary">
            <nav className="flex justify-between items-center">
                {/* Left side */}
                    <div className="flex items-center md:gap-16 gap-4">
                        <Link to="/">
                        <FaBars className="size-8"/>
                        </Link>

                    {/* search input */}
                        <div className="relative sm:w-72 w-40 space-x-2">

                        <ImSearch className="absolute inline-block left-3 inset-y-2"/>

                        <input type="text" placeholder="ค้นหาที่นี่" 
                        className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md
                        focus:outline-none"/>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="relative flex items-center md:space-x-5 space-x-2">

                    {/* Cart side */}
                    <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center 
                        rounded-sm">
                            <IoCartOutline className=""/>
                            {
                                cartItem.length > 0 ? <span className="text-sm font-medium sm:ml-1"
                                >{cartItem.length}</span> : <span className="text-sm 
                                font-medium sm:ml-1">0</span>
                            }
                        </Link>

                        <div>
                            {
                                currentUser ? <>
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <img src={avatar} alt="avatar" className={`size-8 rounded-full $
                                    {currentUser ? 'ring-2 ring-blue-500' : ''}`}/>
                                </button>
                            {/* show dropdowns */}
                            {
                                isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white
                                    shadow-lg rounded-md z-40">
                                        <ul className="py-2">
                                            {
                                                navigation.map((item) => (
                                                    <li key={item.name} onClick={() =>
                                                    setIsDropdownOpen(false)}>
                                                        <Link to={item.href} className="block px-4 py-2
                                                        text-sm hover:bg-gray-100">
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                            <li>
                                                <button
                                                onClick={handleLogOut}
                                                className="block w-full text-left px-4
                                                py-2 text-sm hover:bg-gray-100">Logout</button>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                            </> :<Link to="/login"><FaRegUserCircle className="size-5" /></Link>
                        }
                    </div>

                    </div>
            </nav>
        </header>
    );
};

export default Navbar;