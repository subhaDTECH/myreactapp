import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar=() =>{
    return (
        <>

        <section className="navbar_section">
           <div className="">
            <nav class="navbar navbar-expand-lg  bg_color  fixed-top">
                <NavLink  activeClassName="active_class"    className="navbar-brand" to="#">SuvaDTECH</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                            <NavLink    activeClassName="active_class" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  activeClassName="active_class" className="nav-link" to="/About">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  activeClassName="active_class" className="nav-link" to="/Service">Service</NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink  activeClassName="active_class" className="nav-link" to="/Contact">Contact</NavLink>
                    </li>
                </ul>
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
                


           </div>


        </section>
            
        </>
    )
}

export default Navbar;
