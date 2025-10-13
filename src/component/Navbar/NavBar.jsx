import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
const navbarItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Players",
    path: "/players",
  },
  {
    id: 4,
    name: "Teams",
    path: "/teams",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  }
];

const NavBar = () => {
const [open,setOpen]=useState(false);
const links=   navbarItems.map(route => <li className='md:mr-10 px-4 hover:text-black hover:bg-green-300'><a 
               href={route.path}>{route.name}</a></li>)
    return (
        <div className='flex justify-between p-2  mx-8'>
         <span className='flex  cursor-pointer' onClick={()=>setOpen(!open)}>
          {
            open?<X className='md:hidden'></X>:<Menu className='md:hidden'></Menu>
          }
          <ul className={`md:hidden absolute text-black rounded-r-lg bg-amber-200
            ${open? 'top-7 ': '-top-40'} duration-1000`}>
            {links}
          </ul>
          
          <h3 className='ml-4'>My navbar</h3>
         </span>
            <ul className='md:flex hidden'>
               {
             links
               }
            </ul>
            <button>Login</button>
        </div>
    );
};

export default NavBar;