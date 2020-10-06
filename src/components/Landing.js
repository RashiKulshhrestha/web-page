import React, { Component } from "react";
import {Link} from "react-router-dom";

class Landing extends Component{
    render(){
        return(
            <div className="landing-wrapper">
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
                <div className="mainbar">
                    <h1>Welcome Richard!</h1>
                    <div className="mainbar-wrapper">
                        <div className="mainbar-card1">
                            <div className="mainbar-card1-body">
                                <div>
                                    <div className="h3-heading">
                                        Total Sales
                                    </div>
                                    <div className="h1-heading">220.9$</div>
                                    <div className="profit">+12.09$ </div>
                                </div>
                                <div>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0_6_gZEdRMViVQu5KzLo4wsNh6AiXHFXkqg&usqp=CAU"
                                        alt="trophy" height="150px" width="80px"/>
                                </div>
                            </div>
                            <div className="mainbar-footer">
                                <div>124 Total Sales</div>
                                <span>View Report</span>
                            </div>
                        </div>
                        <div className="mainbar-card1">
                            <div className="mainbar-card1-body">
                                <div>
                                    <div className="h3-heading">
                                        Total Students
                                    </div>
                                    <div className="h1-heading">2900</div>
                                    <div className="profit">+56.6% </div>
                                </div>
                                <div>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQc7K8qZeERzskftzPvIIW9i8xhyEgDX1Le8A&usqp=CAU"
                                        alt="trophy" height="100px" width="80px"/>
                                </div>
                            </div>
                            <div className="mainbar-footer">
                                <div>120 New Students</div>
                                <span>View Report</span>
                            </div>
                        </div>
                    </div>
                    <div className="mainbar-course-card">
                        <div className="mainbar-course-card-body">
                            <header>
                                <div>Recent Courses</div>
                                <Link to="/list-of-courses">See All</Link>
                            </header>
                            <main>
                                <img src="data:image/jpeg;base64,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"
                                alt="react" height="100px" width="200px"/>
                                <div>
                                    <div className="h3-heading"><a href="https://reactjs.org/tutorial/tutorial.html">Learn React Fundamentals</a></div>
                                    <div className="h4-heading">Created by Jordan Walke</div>
                                    <span>19 Enrolled</span>
                                    <div className="h5-heading">Last Updated 9/2020</div>
                                </div>
                            </main>
                                
                        </div>
                    </div>
                </div>
                <div className="report">
                    <div className="report-nav">
                        <div>View Data on</div>
                        <select name="days" id="days">
                            <option value="today">Today</option>
                            <option value="tomorrow">Tomorrow</option>
                            <option value="yesterday">Yesterday</option>
                        </select>
                    </div>
                    <div className="report-main">
                        <div className="h3-heading">
                            Total Sales
                        </div>
                        <div className="h1-heading">830.9$</div>
                        <img src="https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg"
                            alt="graph" width="350px"/>
                        
                        <div>
                            <div className="h3-heading">Latest Enrolled</div>
                            <div className="enrolled-card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQY9Pq3XxcdrON0bQ834SKeMYkCVaP3cheyDA&usqp=CAU"
                                alt="angular" width="100px" height="60px"/>
                                <div><a href="https://www.w3schools.com/angular/angular_intro.asp">Career in AngularJS</a></div>
                                <span className="profit">+20.3</span>
                            </div>
                            <div className="enrolled-card">
                                <img src="data:image/png;base64,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"
                                alt="angular" width="100px" height="60px"/>
                                <div><a href="https://www.javascript.com/">Intro to Javascript</a></div>
                                <span className="profit">+22.3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing;