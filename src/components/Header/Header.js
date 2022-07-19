import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import "bootstrap-icons/font/bootstrap-icons.css";
import './header.css'


const lightMode = function() {
  document.body.classList.toggle('dark');
  
}




const Header = () => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [showForm, setShowForm] = React.useState(false)
  const show = () => setShowForm(true)
  const hide = () => setShowForm(false)
  
 
    return (
      <header>
       <div className="header-left">
           <div className="name-cont">
             <i class="bi bi-person-hearts"></i>
           <Link className="name-link" to="/">Hector Perez</Link>
           </div>
           <div className="link-cont">
               <NavLink className="nav-link" activeClassName='active' to="/work">Work</NavLink>
               <NavLink className="nav-link" activeClassName='active' to="/skills">Skills</NavLink>
               <a href={require("../../files/HectorPerezResume.pdf")} download="hector-perez-resume" className="nav-link-resume" role="button">
               <i class="bi bi-cloud-arrow-down-fill"></i>  Resume
              </a>
           </div>
       </div>
       <div className="header-right">
       { showForm ? <div onClick={() => { lightMode(); hide(); }} className="switch-light"><i class="bi bi-moon-fill"></i></div> : <div onClick={() => { lightMode(); show(); }} className="switch"><i class="bi bi-brightness-high"></i></div> }
       </div>

<div className="media-header">

           <div className="">
             <i class="bi bi-person-hearts"></i>
           <Link className="name-link" to="/">Hector Perez</Link>
           </div>

           <div className="media-switch">
       { showForm ? <div onClick={() => { lightMode(); hide(); }} className="switch-light"><i class="bi bi-moon-fill"></i></div> : <div onClick={() => { lightMode(); show(); }} className="switch"><i class="bi bi-brightness-high"></i></div> }
       </div>

       <Menu as="div" className=" mobile-nav relative inline-block text-center">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border
         border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700
          hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 
          focus:ring-offset-gray-100 focus:ring-indigo-500 ">
             
          <ChevronDownIcon className="  h-5 w-5 " aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" fixed top-0 left-0 right-0 flex justify-center rounded-b-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#about"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-40 py-2 text-2xl'
                  )}
                >
                  About Me
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#services"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-2xl'
                  )}
                >
                  Services
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#reviews"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-2xl'
                  )}
                >
                  Client Reviews
                </a>
              )}
            </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                  href="#contact"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-2xl '
                    )}
                  >
                    Contact
                  </a>
                )}
              </Menu.Item>

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
</div>
  </header>
  
    );
  };

export default Header;