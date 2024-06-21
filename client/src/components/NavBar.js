import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/students'}>Students</NavLink>
            <NavLink to={'courses'}>Courses</NavLink>
            <NavLink to={'/registrations'}>Registrations</NavLink>
        </nav>
    )
}

export default NavBar