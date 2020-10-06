import React, { Component } from "react";
import {Link} from "react-router-dom";

class SideMenu extends Component{
    render(){
        return(
            <div className="sidebar">
                    <div>
                        <i class="fa fa-home" aria-hidden="true"></i>
                        <span>Dashboard</span>
                    </div>
                    <div>
                        <i class="fa fa-book" aria-hidden="true"></i>
                        <Link to="/list-of-courses"><span>Courses</span></Link>
                    </div>
                    <div>
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <span>Message</span>
                    </div>
                    <div>
                        <i class="fa fa-users" aria-hidden="true"></i>
                        <span>Students</span>
                    </div>
                    <div>
                        <i class='fas fa-chalkboard-teacher'></i>
                        <span>Instructors</span>
                    </div>
                    <div>
                        <i class="fa fa-tag" aria-hidden="true"></i>
                        <span>Categories</span>
                    </div>
                    <div>
                        <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                        <span>Blogs</span>
                    </div>
                    <div>
                        <i class="fa fa-file" aria-hidden="true"></i>
                        <span>Pages</span>
                    </div>
                    <div>
                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                        <span>Report</span>
                    </div>
                    <div>
                        <i class="fa fa-question-circle" aria-hidden="true"></i>
                        <span>Help</span>
                    </div>
                </div>
        )
    }
};
export default SideMenu;