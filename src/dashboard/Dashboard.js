import React, { Component } from "react";
import DashboardServices from "./DashboardServices";
import SideMenu from "./SideMenu";
import Stastics from "./Stastics";
import "./dashboard.css";

class Dashboard extends Component{
    render(){
        return(
            <div className="landing-wrapper">
                <SideMenu/>   
                <DashboardServices/>
                <Stastics/>
            </div>
        )
    }
}
export default Dashboard;