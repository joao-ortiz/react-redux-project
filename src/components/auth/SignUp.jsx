import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {password: '', email: '', firstName: '', lastName: ''}
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
        console.log(this.state);
    }
    render() {
        return(
            <div className="container">
                <form onSubmit={this.onSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={this.onChange} value={this.state.password} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" name="firstName" id="firstName" onChange={this.onChange} value={this.state.firstName} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" onChange={this.onChange} value={this.state.lastName} />
                    </div>
                    <div className="input-field">
                        <button type="submit" className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
