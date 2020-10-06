import React, { Component } from "react";
import {Link} from "react-router-dom";

class DashboardServices extends Component{
    render(){
        return(
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
        )
    }
};
export default DashboardServices;