import React, { Component } from "react";

class Stastics extends Component{
    render(){
        return(
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
        )
    }
};
export default Stastics;