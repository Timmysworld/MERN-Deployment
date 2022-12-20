import React from 'react'
import { useLocation, Link} from 'react-router-dom'

const Header = () => {
    const location = useLocation();
    return (
        <header className="App-header">
            <h1>Pet Shelter</h1>
            {location.pathname === "/" ? <Link to="/new">Create</Link> : <Link to="/">Home</Link>}
        </header>
    )
}

export default Header