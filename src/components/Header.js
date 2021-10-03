import React from 'react'

export default function header() {
    return (
        <div className = "card bg-info text-center text-light rounded-0">
            <h1 className = "display-4">
                <i className = "fas fa-clipboard-list mr-3"></i>
                <span className = "text-dark mr-3">MERN</span>ToDo List
            </h1>
        </div>
    )
}
