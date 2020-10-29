import React from 'react';

class CreateProject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {title: '', content: ''}
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
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea type="text" name="content" id="content" onChange={this.onChange} value={this.state.content}></textarea>
                    </div>
                    <div className="input-field">
                        <button type="submit" className="btn pink lighten-1 z-depth-0">Create Project</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject
