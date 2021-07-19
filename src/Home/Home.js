import React from 'react'
import AddTodo from '../components/AddTodo'
import CardTodo from '../components/Card'
import Dashboard from '../components/Dashboard'
import "./Home.css"

function Home() {
    return (
        <div>
            <Dashboard />
            <AddTodo />
            <div className="card_Todo">
            <CardTodo />
            </div>
            
            
        </div>
    )
}

export default Home
