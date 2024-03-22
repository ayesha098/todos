import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/js/dist/modal';
import Form from './Form';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const page = ["All Task", "Important Tasks", "Completed Tasks", "Uncompleted Tasks"];
   const links =["/","/important-tasks","/completed-tasks","/uncompleted-tasks"]
  return (
    <>
      <nav className="bar bgcolor sidebar navb">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <h1 className='nav-item  border-bottom'>
              <Link to="#" className='nav-link text-white font-monospace fw-bold logo text-center fs-2'>TODO </Link>
            </h1>
            <h1 className="nav-item menu">
              <Link to="#" onClick={openPopup} className='nav-link bgColor rounded fw-bold text-center text-white mx-2 mt-3 fs-4 mb-2' style={{ backgroundColor: "#D3A137" }}>New Task </Link>
            </h1>
            {page.map((p, i) => (
              <li key={i} className='nav-item my-1 py-2'>
                <Link to={links[i]} className='text-decoration-none ms-4 fs-5 textcolor'>{p}</Link>
              </li>
            ))}
          </ul>
        </div>
        
      
      </nav>
      {isOpen && (
      <Form close={closePopup}/>
      )}
    </>
  );
}

export default Nav;