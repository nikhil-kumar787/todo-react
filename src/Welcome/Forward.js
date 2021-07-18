import React from 'react'
import './Forward.css'
import { Link } from "react-router-dom";

function Forward() {
    return (
        <div className="forward">
            <h1>Welcome,Please verify your email by clicking the link send in your registered mail</h1>
            <h2>If already verified,<Link to={"/login"} className="nav-link">
        Please Login
      </Link></h2>
        </div>
    )
}

export default Forward
