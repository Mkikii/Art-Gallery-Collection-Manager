import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorMessage = () => {
    const error = useRouteError();
    console.error(error)
    return (
        <>
        <main>
            <h1>Whoops! Something went wrong!</h1>
        </main>
        </>
    )
}

export default ErrorMessage