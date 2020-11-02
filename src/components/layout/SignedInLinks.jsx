import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

function SignedInLinks(props) {
    return (
        <ul className="right">
            <li>
                <NavLink to="/createproject">New Project</NavLink>
            </li>
            <li>
                <a href="/" onClick={props.signOut}>Log Out</a>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink ligthen-1">{props.profile.initials}</NavLink>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)