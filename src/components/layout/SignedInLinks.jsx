import { NavLink } from 'react-router-dom'

function SignedInLinks() {
    return (
        <ul className="right">
            <li>
                <NavLink to="/">New Project</NavLink>
            </li>
            <li>
                <NavLink to="/">Log Out</NavLink>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink ligthen-1">IN</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks