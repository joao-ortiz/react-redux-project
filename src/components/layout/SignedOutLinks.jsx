import { NavLink } from 'react-router-dom'

function SignedOutLinks() {
    return (
        <ul className="right">
            <li>
                <NavLink to="/">Sign Up</NavLink>
            </li>
            <li>
                <NavLink to="/">Login</NavLink>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink ligthen-1">AA</NavLink>
            </li>
        </ul>
    )
}

export default SignedOutLinks