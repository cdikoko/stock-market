import { React, useState } from "react"
import "../styling/Nav.css"
import { Link } from 'react-router-dom'

function NavbarComponent() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    const loginOrOut = (e) => {
        e.preventDefault()
        if (loggedIn) {
            setLoggedIn(false)
        } else {
            setLoggedIn(true)
        }
    }

    const options = [
        {
            name: "Register",
            handler: "/company/register"
        }
    ]

    return (
        <header>
            <nav className='navbar' role="navigation">
                <ul className="nav-links">
                    <li>
                        <div className="dropdown">
                            <label onClick={() => setShowDropdown(!showDropdown)}><Link to={"/"}>Companies</Link></label>
                        </div>
                    </li>
                    <li><Link to="/company/view">Stock Exchange</Link></li>
                    <li><a onClick={(e) => loginOrOut(e)} href="">{loggedIn ? "Logout" : "Login"}</a></li>
                </ul>
            </nav>
            <div className="border-bot" />
            {showDropdown &&
                <ul className="tab-items">
                    {options.map(companyOption => <li onClick={() => setShowDropdown(!showDropdown)} className="dropdown" key={companyOption.name}>
                        <Link to={companyOption.handler}>{companyOption.name}</Link></li>)}
                </ul>
            }

        </header>
    );
}


export default NavbarComponent