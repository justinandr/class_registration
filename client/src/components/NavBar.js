import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <nav>
            <h1>Course Registration</h1>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/students'}>Students</NavLink>
            <NavLink to={'courses'}>Courses</NavLink>
            <NavLink to={'/registrations'}>Registrations</NavLink>
        </nav>
    )
}

export default NavBar