import React from 'react';
import { Link, } from 'react-router-dom'
import logo from '../assets/images/iconos/logo.png'
function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="sideBar" >

                {/*<!-- Sidebar - Brand -->*/}
                <Link to='/' exact='true' className="navLink">
                    <div className="logo-box">
                        <img className="logo" src={logo} alt="El rastrojero" />
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="navItem">
                    <Link to='/' className="navLink" >
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - El Rastrojero</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebarHeading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="navItem">
                    <Link to='/resume' className="navLink"  >
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Resumen</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="navItem">
                    <Link to='/lastProduct' className="navLink"  >
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último producto</span></Link>
                </li>

                <li className="navItem">
                    <Link to='/categories' className="navLink"  >
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Categorías</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="navItem">
                    <Link to='/products' className="navLink"  >
                        <i className="fas fa-fw fa-table"></i>
                        <span>Listado de productos</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}
            {/*  */}
        </React.Fragment>

    )
}
export default SideBar;