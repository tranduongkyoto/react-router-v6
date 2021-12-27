/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function SingleCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Course Name</h5>
        <p className="card-text">{id}</p>
        <a
          onClick={() => navigate('/dashboard', { state: id })}
          class="card-link"
        >
          More Info
        </a>
        <Link to="/dashboard" state={'ReactJS Testing'} class="card-link">
          Test Course
        </Link>
      </div>
    </div>
  );
}
