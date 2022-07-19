import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import './header.css'


const lightMode = function() {
  document.body.classList.toggle('dark');
  
}




const Header = () => {

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

<nav role="navigation">
  <ul>
    <li><a href="." ><i class="bi bi-chevron-double-down"></i></a>
      <ul class="dropdown" aria-label="submenu">
      <li><Link to="/work">Work</Link></li>
      <li><Link to="/skills">Skills</Link></li>
      <li><a href={require("../../files/HectorPerezResume.pdf")} download="hector-perez-resume" role="button">
               <i class="bi bi-cloud-arrow-down-fill"></i>  Resume
              </a></li>
      </ul>
    </li>
  </ul>
</nav>
</div>
  </header>
  
    );
  };

export default Header;