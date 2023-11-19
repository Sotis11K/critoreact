import React from 'react'
import './notFound.css'
import { ImSad } from "react-icons/im";

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
        <h1>404</h1>
        <h2>The page you are looking for does not exist</h2>
        <ImSad className="sad" />
    </div>
  )
}

export default NotFoundPage