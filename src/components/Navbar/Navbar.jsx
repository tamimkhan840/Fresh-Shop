/* eslint-disable react/prop-types */

import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

import DarkMode from "./DarkMode";
import { Link } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { users, setUsers, signOutUser, addToCart} = useContext(AuthContext);


  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Menu Array Based on User Authentication
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    ...(users
      ? [
          {
            id: 2,
            name: "Top Rated",
            link: "/allproduct",
          },
        ]
      : []),
    ...(users
      ? [
          {
            id: 3,
            name: "Kids Wear",
            link: "/productWear",
          },
        ]
      : []),
    ...(users
      ? [
          {
            id: 4,
            name: "Profile",
            link: "/profile",
          },
        ]
      : []),
  ];
  const handleSinOutClick = () => {
    signOutUser()
    .then(() => {

      setUsers(null)
        console.log("user log out");

    })
    .catch((error)=>{return console.log(error);
    })
  }
  return (
    <>
      <div className="shadow-md bg-white sticky top-0 dark:bg-gray-900 dark:text-white duration-200  z-40">
        {/* upper Navbar */}
        <div className=" bg-green-500/35 py-2">
          <div className="container flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-xl sm:text-3xl flex gap-1 md:gap-2">
                <img src={Logo} alt="Logo" className="w-10 " />
                Cartly
              </a>
            </div>

            {/* search bar */}
            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>

              {/* order button */}
              <Link to={users ? '/add-to-cart' : '/login'}

                className="relative bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                {
                    addToCart.length === 0 ? '' : <div className='w-5 h-5  absolute -top-3 -right-1  rounded-full flex justify-center items-center text-white font-semibold bg-red-500'>
                      <span className='text-[13px]'>{addToCart.length}</span>

                    </div>
                    }
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </Link>

              {/* Darkmode Switch */}
              <div>
                <DarkMode />
              </div>
              <div className="cursor-pointer  ">
                {
                  users ? <Link to={"/login"} onClick={handleSinOutClick} className="px-1 md:px-3 bg-red-500 rounded py-2 text-base">Logout</Link>:<Link className="px-3 py-2 bg-sky-500 rounded" to={"/login"}>
                  Login
                  </Link>
                }

                {/* <FcBusinessman /> */}
              </div>
            </div>
          </div>
        </div>
        {/* lower Navbar */}
        <div className=" w-full z-50 ">
      {/* Navbar Content */}
      <div className="flex justify-center text-white">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200 text-black dark:text-white"
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Icon for small devices */}

      {
        isOpen ? <div className="md:hidden px-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          <IoClose size={24} />
        </button>
            </div> :<div className="md:hidden px-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FiMenu size={24} />
        </button>
       </div>
      }



      {/* Slide-down menu */}
      {
        isOpen && <div
        className="md:hidden absolute top-20 left-0 w-full rounded-b-xl shadow-lg bg-slate-50/70 text-black transition-all duration-1000 border-e-base-300"
      >
        <ul className="flex flex-col items-center justify-center space-y-4 py-5">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="text-black hover:text-primary duration-200 font-semibold"
                onClick={toggleMenu} // Close menu on click
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      }
      </div>
      </div>
    </>
  );
};

export default Navbar;
