import React, { Component } from "react";
// The hard-coded list can be replaced by API calls later
import courses from "./CourseObject";
import "./course.css";

class Courses extends Component{
    render(){
        return(
            <div className="course-wrapper">
                {courses.map((course) =>(
                    <div className="course-card">
                        <img src={course.img} alt={course.name}/>
                        <div><a href={course.link}>{course.name}</a></div>
                    </div>
                    )
                )}
            </div>
        )
    }
};

export default Courses;