import React, { Component, Fragment } from "react";

class NavBar extends Component{
    render(){
        return(
            <Fragment>
                <nav className="nav-dark">
                    <div className="nav-heading">
                        <span><i className="fas fa-book"/></span>
                        <span>Courseplus</span>
                    </div>
                    <div className="searchbar">
                        <input placeholder="Search..."></input><span className="icon"><i className="fas fa-search"/></span>
                    </div>
                    <div className="utils">
                        <span><i className="fas fa-bell"/></span>
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <span><i class="fa fa-user-circle-o"></i></span> Richard Ali
                    </div>
                </nav>
            </Fragment>
        )
    }
    
}
export default NavBar;