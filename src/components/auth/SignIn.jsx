import React from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {password: '', email: ''}
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.signIn(this.state)
    }
    render() {
        const { authError } = this.props
        return(
            <div className="container">
                <form onSubmit={this.onSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={this.onChange} value={this.state.password} />
                    </div>
                    <div className="input-field">
                        <button type="submit" className="btn pink lighten-1 z-depth-0">Login</button>
                        <div className="red-text center">
        {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
