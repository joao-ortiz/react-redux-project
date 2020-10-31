const initState = {
    projects: [
        {id: 1, title: 'Some title', content: 'Some content bla bla bla'},
        {id: 2, title: 'Some title', content: 'Some content bla bla bla'},
        {id: 3, title: 'Some title', content: 'Some content bla bla bla'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state
        default: 
            return state
    }
}

export default projectReducer