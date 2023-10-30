import React from 'react'
import { useRouteError } from "react-router-dom";


const Error = () => {

    const errorEle = useRouteError();
  return (
    <div className="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
        <i className="error-message">{errorEle.statusText || errorEle.message}</i>
        </p>
  </div>
  )
}

export default Error