import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function AllCourses() {
  const courseList = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Angular'];
  return (
    <div className="container">
      <h2>All Courses</h2>
      <ul className="list-group mb-2">
        {courseList.map((course) => (
          <NavLink
            key={course}
            to={`/courses/allcourses/${course}`}
            className="list-group-item list-group-item-action"
          >
            <li className="list-group-item">{course}</li>
          </NavLink>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
